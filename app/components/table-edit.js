import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class TableEditComponent extends Component {
  @tracked isEditing = false;

  @action
  toggleEditing() {
    if (this.isEditing) {
      this._saveChange();
      this.isEditing = false;
    } else {
      this.isEditing = true;
    }
  }

  _saveChange() {
    return true;
  }
}
