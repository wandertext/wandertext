import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import type { LeafletEvent, Map } from "leaflet";
import type Modals from "ember-promise-modals";

interface WandertextLeafletEvent extends LeafletEvent {
  target: Map;
}

export default class MapComponent extends Component {
  lat = 40.712_778;

  lng = -74.006_111;

  @tracked
  zoom = 8;

  tiles = {
    esriPhysical: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}",
      attribution: "Tiles &copy;Esri &mdash; Source: US National Park Service",
    },
    openStreetMapMapnik: {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        "&copy;<a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    },
  };

  @service declare modals: Modals;

  @action openDefaultModal(content: string) {
    this.modals.open(`modals/${content}`);
  }

  @action updateZoom(event: WandertextLeafletEvent) {
    // Seems to set up a race condition where the attribution is not always as
    // tidy as it should be.
    this.zoom = event.target.getZoom();
    const esri = this.tiles.esriPhysical.attribution;
    const mapnik = this.tiles.openStreetMapMapnik.attribution;
    if (this.zoom <= 8) {
      event.target.attributionControl.removeAttribution(mapnik);
      event.target.attributionControl.addAttribution(esri);
    } else {
      event.target.attributionControl.removeAttribution(esri);
      event.target.attributionControl.addAttribution(mapnik);
    }
  }

  @action placeAttribution(event: WandertextLeafletEvent) {
    event.target.attributionControl.setPosition("bottomleft");
  }
}
