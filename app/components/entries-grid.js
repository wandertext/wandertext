import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";
import { htmlSafe } from "@ember/string";
import { action } from "@ember/object";
import { queryManager } from "ember-apollo-client";
import { task } from "ember-concurrency";
import query from "wandertext/gql/queries/sortedEntriesFeed.graphql";
import mutation from "wandertext/gql/mutations/edit-entry.graphql";

export default class EntriesGridComponent extends Component {
  @service store;

  @service entriesEnvironment;

  @queryManager apollo;

  @service notify;

  @service currentContributor;

  @tracked activeEntry = null;

  activeUntrackedEntry = null;

  @tracked text = null; // Set in constructor.

  @tracked cursor = null;

  @tracked rows = [];

  limit = 10;

  get columns() {
    if (this.entriesEnvironment.currentText === this.args.text.id) {
      return this.entriesEnvironment.columns;
    }

    return this.entriesEnvironment.buildColumns(this.args.text);
  }

  @tracked page = 1;

  @tracked isShowingModal = false;

  @tracked modalPlace = null;

  @action
  toggleModal() {
    this.isShowingModal = !this.isShowingModal;
  }

  @action
  async showModal(data) {
    this.isShowingModal = true;
    this.modalPlace = data;
  }

  @action updateEntry(entry) {
    return entry;
  }

  @action
  setActiveEntry(entry) {
    // Worry about this later.
    // if (this.activeEntry !== null && this.activeEntry !== entry) {
    //   if (
    //     !this._isEquivalentEntry(this.activeEntry, this.activeUntrackedEntry)
    //   ) {
    //     this._save();
    //   }
    // }

    // if (entry === null) {
    //   this.activeEntry = null;
    //   return true;
    // }

    // this.activeUntrackedEntry = {
    //   attestedName: entry.attestedName,
    //   properties: { ...entry.properties }
    // };

    this.activeEntry = entry;
  }

  constructor(...args) {
    super(...args);
    this.text = this.args.text;
    this.fetchRecords.perform();
  }

  @(task(function*() {
    const variables = {
      cursor: this.cursor,
      limit: this.limit,
      id: this.text.id
    };
    const textQuery = yield this.apollo.watchQuery(
      { query, variables },
      "text"
    );
    this.rows = textQuery.sortedEntryFeed.sortedEntries;
    // Put off until cursor problems are solved.
    // if(this.rows) {
    //   this.rows = this.rows.concat(textQuery.sortedEntryFeed.sortedEntries);
    // } else {
    //   this.rows = textQuery.sortedEntryFeed.sortedEntries;
    // }
    this.cursor = textQuery.sortedEntryFeed.cursor;
  }).restartable())
  fetchRecords;

  get tableWidth() {
    return htmlSafe(
      "width: " +
        100 +
        // This.args.columns.reduce((accumulator, column) => {
        //   return accumulator + parseInt(column.width.replace("px", ""), 10);
        // }, 0) +
        "px;"
    );
  }

  async _save() {
    const entry = this.activeEntry;
    try {
      this.entryProps.forEach(property => {
        if (property.type === "number") {
          const number = entry[`properties.${property.name}`];
          entry[`properties.${property.name}`] = parseInt(number, 10);
        }
      });
      const variables = {
        contributorId: this.currentContributor.contributor.id,
        entryJSON: JSON.stringify(entry)
      };
      const response = await this.apollo.mutate(
        { mutation, variables },
        "editEntry"
      );
      if (response.success) {
        return this.notify.success(response.message);
      }
    } catch (error) {
      if (Array.isArray(error)) {
        error.forEach(message => this.notify.error(message.validation[0]));
      } else {
        this.notify.error(error.message);
      }
    }
  }

  @tracked entryProps = this.text.entryProperties;

  _isEquivalentEntry(a, b) {
    if (a.attestedName !== b.attestedName) {
      return false;
    }

    const aProps = a.properties;
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
