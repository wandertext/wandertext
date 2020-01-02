import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class EntryNewComponent extends Component {
  @tracked newShowing = false;

  @tracked model = [];

  constructor(...args) {
    super(...args);
    const newModel = { attestedName: "", place: "", properties: {} };
    // For (const column of this.args.columns.filter(column =>
    //   column.valuePath.startsWith("properties.")
    // )) {
    //   newModel.properties[column.valuePath.replace("properties.", "")] = null;
    // }

    this.model.push(newModel);
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
