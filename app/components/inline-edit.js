import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { htmlSafe } from "@ember/string";
import { run } from "@ember/runloop";
import { tryInvoke } from "@ember/utils";

export default class InlineEditComponent extends Component {
  @tracked isEditing = false;

  enabled = true;

  field = "text";

  @tracked value = this.args.value;

  @tracked previousValue = null;

  placeholder = "placeholder";

  saveLabel = "Save";

  cancelLabel = "Cancel";

  editLabel = "Edit";

  fieldWidth = null;

  showSaveButton = true;

  showCancelButton = true;

  editorClass = "";

  buttonContainerClass = "";

  editButtonClass = "";

  saveButtonClass = "";

  cancelButtonClass = "";

  // DidInsertElement() {
  //   this._super(...arguments)

  //   this._handleClicks = this._handleClicks.bind(this)
  //   document.addEventListener('click', this._handleClicks)
  // },

  // willDestroyElement() {
  //   document.removeEventListener('click', this._handleClicks)
  // },

  _handleClicks(ev) {
    if (!this.enabled) return;

    const clickedInside = this.element.contains(ev.target);

    if (clickedInside && !this.isEditing) {
      if (this.showEditButton) {
        return;
      }

      this._setFieldWidth();
      this.startEditing(ev);
    } else if (!clickedInside && this.isEditing) {
      this.cancel();
    }
  }

  _setFieldWidth() {
    const { width } = this.element.getBoundingClientRect();

    run(this, () => {
      this.fieldWidth = htmlSafe(`width: ${width + 2}px`);
    });
  }

  // DidReceiveAttrs() {
  //   if (this.enabled === false && this.isEditing) {
  //     this.send('cancel')
  //   }
  // },

  @action
  save() {
    console.log("saving", this.value);

    // TryInvoke(this, "onSave", [this.value]);

    this.isEditing = false;
  }

  @action
  startEditing() {
    // E.stopPropagation();
    tryInvoke(this, "onEdit");

    run(this, () => {
      this.previousValue = this.value;
      this.isEditing = true;
    });
  }

  @action
  cancel() {
    tryInvoke(this, "onCancel");
    this.value = this.previousValue;
    this.isEditing = false;
  }
}
