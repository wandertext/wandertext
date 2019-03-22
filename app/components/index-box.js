import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default class IndexBoxComponent extends Component {
  @service data;

  @service card;

  constructor(...args) {
    super(...args);
    if (!this.data.docs) {
      this.data._setDocs();
    }
  }

  didInsertElement() {
    this.card.reset();
  }
}
