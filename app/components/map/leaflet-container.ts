import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import type { LeafletEvent, Map } from "leaflet";

interface WandertextLeafletEvent extends LeafletEvent {
  target: Map;
}

interface MapLeafletContainerComponentArgs {
  showAttribution: boolean;
  lat: number;
  lng: number;
}

export default class MapLeafletContainerComponent extends Component<MapLeafletContainerComponentArgs> {
  @tracked
  zoom = 8;

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
    if (this.args.showAttribution) {
      event.target.attributionControl.setPosition("bottomleft");
    }
  }

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
}
