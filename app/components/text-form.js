import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class TextFormComponent extends Component {
  @tracked newText;

  constructor(...args) {
    super(...args);
    if (this.args.store) {
      this.newText = this.args.store.createRecord("text");
    }
  }

  @action createText() {
    if (this.newText) {
      this.newText.save();
    }
  }
}
