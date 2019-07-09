import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class TableRowComponent extends Component {
  @action
  async showModal(data) {
    this.isShowingModal = true;
    this.modalPlace = data;
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
  }

  @action
  async validateProperty(changeset, property) {
    return changeset.validate(property);
  }
}
