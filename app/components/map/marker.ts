import Component from "@glimmer/component";

interface MapMarkerComponentSignature {
  Element: HTMLElement;
  Args: {
    layersMarker: EmberLeafletMapMarker;
    lat: number;
    lng: number;
  };
}

export default class MapMarkerComponent extends Component<MapMarkerComponentSignature> { }

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Map::Marker": typeof MapMarkerComponent;
    "map/marker": typeof MapMarkerComponent;
  }
}
