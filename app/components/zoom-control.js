import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember-decorators/object";

export default class ZoomControlComponent extends Component {
  @service theMap;

  @action
  zoomIn() {
    this.theMap.map.zoomIn(1);
  }

  @action
  zoomOut() {
    this.theMap.map.zoomOut(1);
  }
}
