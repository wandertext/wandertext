import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class TableEditComponent extends Component {
  @tracked previousValue = null;

  @action
  saveCell() {
    if (this.args.entry.hasDirtyAttributes) {
      this.args.entry.save();
    }
  }
}
