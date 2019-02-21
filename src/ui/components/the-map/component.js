import Component from "@ember/component";
import { inject as service } from "@ember-decorators/service";

export default class TheMapComponent extends Component {
  @service theMap;

  elementId = "the-map";

  async didInsertElement() {
    await this.theMap.createMap();
  }
}
