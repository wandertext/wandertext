import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class EntryGridControlsComponent extends Component {
  @tracked newShowing = false;

  @tracked model = [];

  constructor(...args) {
    super(...args);
    const model = { properties: {} };
    this.args.columns.map(column => {
      if (column.valuePath.startsWith("properties.")) {
        model.properties[column.valuePath.replace("properties.", "")] = null;
      } else {
        model[column.valuePath] = "boo";
      }

      return true;
    });
    this.model.push(model);
  }

  @action
  toggleNew() {
    this.newShowing = !this.newShowing;
  }

  @action
  focusIn() {
    return true;
  }
}
