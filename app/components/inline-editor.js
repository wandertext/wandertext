import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class InlineEditorComponent extends Component {
  focusOnInput() {
    const children = [...this.element.children];

    children.forEach((child) => {
      if (child.tagName === "input") child.focus();
    });
  }

  @action
  keyUp(ev) {
    const { keyCode } = ev;

    const isEnter = keyCode === 13;
    const isEsc = keyCode === 27;

    if (isEnter) {
      this.args.onSave();
    } else if (isEsc) {
      this.args.onCancel();
    }
  }
}
