import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class TextFormComponent extends Component {
  @service router;

  @action createText() {
    this.args.model.save();
    this.router.transitionTo("texts.index");
  }
}
