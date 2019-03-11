import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default class IndexBoxComponent extends Component {
  @service data;

  @service theMap;

  @service card;

  constructor(...args) {
    super(...args);
    if (!this.data.docs) {
      this.data._setDocs();
    }
  }

  didInsertElement() {
    this.set("card.title", "Wandertext");
    this.set("card.logo", this.card.waw);
    if (!this.theMap.map) {
      this.theMap._createMap();
    }
  }
}
