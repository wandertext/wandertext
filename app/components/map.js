import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class MapComponent extends Component {
  lat = 40.712_778;

  lng = -74.006_111;

  zoom = 10;

  @service modals;

  @action openDefaultModal(content) {
    this.modals.open(`modals/${content}`);
  }
}
