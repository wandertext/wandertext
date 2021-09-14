import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class MapComponent extends Component {
  lat = 40.712_778;

  lng = -74.006_111;

  @tracked
  zoom = 8;

  @service modals;

  @action openDefaultModal(content) {
    this.modals.open(`modals/${content}`);
  }

  @action updateZoom(event) {
    this.zoom = event.target.getZoom();
  }
}
