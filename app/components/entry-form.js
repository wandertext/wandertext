import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class EntryFormComponent extends Component {
  @service router;

  @service store;

  @tracked entry = this._createBlankEntry();

  @action createEntry() {
    this.router.transitionTo("/workbench/texts/text", this.args.text);
  }

  _createBlankEntry() {
    const entry = { text: this.args.text, properties: {} };
    entry[this.args.text.entrySort] = null;
    if (this.args.text.entryProperties) {
      this.args.text.entryProperties.forEach(property => {
        entry.properties[property.name] = null;
      });
    }

    return this.store.createRecord("entry", entry);
  }
}
