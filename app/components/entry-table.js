import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import { capitalize } from "@ember/string";
import { action } from "@ember/object";
import {
  validateNumber,
  validatePresence
} from "ember-changeset-validations/validators";

export default class EntryTableComponent extends Component {
  @service currentContributor;

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

  @tracked rows = this.args.text.entries.toArray();

  constructor(...args) {
    super(...args);
    this._buildColumns();
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
        propObj.owner === this.currentContributor.contributor.wandertextId ||
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

  @action
  async showModal(data) {
    this.isShowingModal = true;
    this.modalPlace = data;
  }

  @action
  async validateProperty(changeset, property) {
    return changeset.validate(property);
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
}
