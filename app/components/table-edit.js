import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class TableEditComponent extends Component {
  previousValue = String(this.currentValue);

  get property() {
    return this.args.property.replace(".", "-");
  }

  @tracked currentValue = this.args.entry.get(this.args.property) || "";

  @action
  saveCell() {
    if (
      this.args.entry.hasDirtyAttributes ||
      this.previousValue !== this.currentValue
    ) {
      this.args.entry.save();
      this.previousValue = this.currentValue;
    }
  }
}
