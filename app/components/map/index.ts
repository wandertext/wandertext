import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { WandertextLeafletEvent } from "wandertext";
import MapMarkerComponent from "./marker";

interface Marker {
  LayersMarker: typeof LayersMarkerComponent;
  Marker: typeof MapMarkerComponent;
}

export interface MapComponentSignature {
  Element: HTMLDivElement;
  Args: {
    fullScreen: boolean;
  };
  Blocks: {
    default: [marker: Marker];
  };
}

export default class MapComponent extends Component<MapComponentSignature> {
  lat = 40.712_778;

  lng = -74.006_111;

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

  @action onLoad(event: WandertextLeafletEvent) {
    // if (this.args.showAttribution) {
    //   event.target.attributionControl.setPosition("bottomleft");
    // }

    // if (this.args.markers && this.args.markers.length > 0) {
    //   const coordinates = this.args.markers.filter(
    //     (marker: Marker): marker is Marker =>
    //       Boolean(marker.latitude && marker.longitude)
    //   );
    //   const bounds: [number, number][] = coordinates.map(marker => [
    //     marker.latitude,
    //     marker.longitude,
    //   ]);

    //   event.target.fitBounds(bounds);
    // }
    event;
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

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    Map: typeof MapComponent;
  }
}
