import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default class IndexBoxComponent extends Component {
  @service card;

  didInsertElement() {
    this.card.reset();
  }
}
