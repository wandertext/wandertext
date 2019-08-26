import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import { htmlSafe, capitalize } from "@ember/string";
import { action } from "@ember/object";
import {
  validateNumber,
  validatePresence
} from "ember-changeset-validations/validators";
import { queryManager } from "ember-apollo-client";
import { task } from "ember-concurrency";
import query from "wandertext/gql/queries/sortedEntriesFeed.graphql";
import mutation from "wandertext/gql/mutations/update-entry.graphql";

export default class EntryGridComponent extends Component {
  @service store;

  @queryManager apollo;

  @service notify;

  @service currentContributor;

  @tracked activeEntry = null;

  activeUntrackedEntry = null;

  @tracked cursor = null;

  @tracked model = [];

  @tracked columns = [
    {
      label: "Attested Name",
      width: "120px",
      valuePath: "attestedName",
      property: {
        owner: "admin",
        help: "How the place is referred to in the text"
      }
    },
    {
      label: "Linked Place",
      width: "120px",
      valuePath: "place",
      property: {
        help:
          "The place as it appears in the Wandertext database. A marker means it is mappable."
      }
    }
  ];

  limit = 20;

  @tracked page = 1;

  @tracked isShowingModal = false;

  @tracked modalPlace = null;

  @action
  toggleModal() {
    this.isShowingModal = !this.isShowingModal;
  }

  @action
  async validateProperty(changeset, property) {
    return changeset.validate(property);
  }

  @action
  async showModal(data) {
    this.isShowingModal = true;
    this.modalPlace = data;
  }

  @action
  fetchNewPage(page) {
    page = parseInt(page, 10);
    this.model = [];
    if (page > 0) {
      this.page = page;
    } else {
      this.page = 1;
    }

    this.fetchRecords.perform();
  }

  @action
  setActiveEntry(entry) {
    if (this.activeEntry !== null && this.activeEntry !== entry) {
      if (
        !this._isEquivalentEntry(this.activeEntry, this.activeUntrackedEntry)
      ) {
        this._save();
      }
    }

    if (entry === null) {
      this.activeEntry = null;
      return true;
    }

    this.activeUntrackedEntry = {
      attestedName: entry.get("attestedName"),
      properties: { ...entry.get("properties") }
    };

    this.activeEntry = entry;
  }

  constructor(...args) {
    super(...args);
    this._buildColumns();
    // Const observable = getObservable(result);
    this.fetchRecords.perform(null);
  }

  @(task(function*() {
    const variables = {
      cursor: this.cursor,
      limit: this.limit,
      id: this.args.text.id
    };
    const text = yield this.apollo.watchQuery({ query, variables }, "text");
    this.model = this.model.concat(text.sortedEntryFeed.sortedEntries);
    this.cursor = text.sortedEntryFeed.cursor;
  }).restartable())
  fetchRecords;

  get tableWidth() {
    return htmlSafe(
      "width: " +
        this.columns.reduce((accumulator, column) => {
          return accumulator + parseInt(column.width.replace("px", ""), 10);
        }, 0) +
        "px;"
    );
  }

  _buildColumns() {
    const { text } = this.args;
    text.entryProperties.forEach(propObj => {
      let width = "150px";
      if (propObj.type === "number") {
        width = "75px";
      }

      const label = propObj.inputLabel || capitalize(propObj.name);
      const valuePath = `properties.${propObj.name}`;
      if (
        propObj.owner === this.currentContributor.contributor.id ||
        propObj.owner === "admin"
      ) {
        this.columns.pushObject({ valuePath, width, label, property: propObj });
      }
    });
    /* Save figuring out dates for later.
    this.columns.pushObject({
      label: "Modified on",
      valuePath: "modifiedOn"
    });
    this.columns.pushObject({
      label: "Created on",
      valuePath: "createdOn"
    });
    */
  }

  async _save() {
    const changeset = this.activeEntry;
    const snapshot = changeset.snapshot();
    try {
      await changeset.validate();
      if (changeset.get("isValid")) {
        this.entryProps.forEach(property => {
          if (property.type === "number") {
            const number = changeset.get(`properties.${property.name}`);
            changeset.set(`properties.${property.name}`, parseInt(number, 10));
          }
        });
        const variables = {
          id: changeset.get("id"),
          attestedName: changeset.get("attestedName"),
          properties: changeset.get("properties"),
          contributor: this.currentContributor.contributor.id
        };
        const response = await this.apollo.mutate(
          { mutation, variables },
          "updateEntry"
        );
        if (response.success) {
          return this.notify.success(response.message);
        }
      }

      throw changeset.errors;
    } catch (error) {
      if (Array.isArray(error)) {
        error.forEach(message => this.notify.error(message.validation[0]));
      } else {
        this.notify.error(error.message);
      }

      changeset.restore(snapshot);
    }
  }

  entryProps = this.args.text.entryProperties.toArray();

  get EntryValidations() {
    const validations = {
      attestedName: validatePresence(true)
    };
    this.entryProps.forEach(property => {
      const validators = [];
      // Skip read only properties and
      // properties that aren't owned by the current user
      if (
        !property.readOnly &&
        (property.owner === null ||
          property.owner === undefined ||
          property.owner === this.currentContributor.contributor.wandertextId)
      ) {
        if (!property.nullable) {
          validators.push(validatePresence(true));
        }

        if (property.type === "number") {
          validators.push(validateNumber(true));
        }
      }

      validations[`properties.${property.name}`] = validators;
    });
    return validations;
  }

  _isEquivalentEntry(a, b) {
    if (a.get("attestedName") !== b.attestedName) {
      return false;
    }

    const aProps = a.get("properties");
    const bProps = b.properties;

    if (Object.keys(aProps).length > Object.keys(bProps).length) {
      return false;
    }

    if (
      Object.keys(bProps).filter(prop => {
        // eslint-disable-next-line eqeqeq
        if (aProps[prop] != bProps[prop]) {
          return true;
        }

        return false;
      }).length > 0
    ) {
      return false;
    }

    return true;
  }
}
