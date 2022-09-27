import Component from "@glimmer/component";
import { MarkerLayer } from "ember-leaflet";
import { guidFor } from "@ember/object/internals";
import L from "leaflet";

interface MapMarkerComponentSignature {
  Element: HTMLElement;
  Args: {
    opacity?: number;
    placeName?: string; // alt text for the icon
    layersMarker: MarkerLayer;
    lat: number;
    lng: number;
  };
  Blocks: {
    default: [];
  };
}

export default class MapMarkerComponent extends Component<MapMarkerComponentSignature> {
  guid = `${guidFor(this)}-marker`;

  get placeName() {
    return this.args.placeName ?? "Unknown Place";
  }

  get opacity() {
    return this.args.opacity ?? 0.75;
  }

  get icon() {
    // Add active logic here to change text color.
    const className = "bg-none border-0 text-primary";
    const stroke = "#C4D8E2";
    const dimension = "1.25rem";

    return L.divIcon({
      className,
      html: `<svg width="${dimension}" height="${dimension}" class="fill-current" id="${this.guid}-div-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.32 3.26">
        <title>${this.placeName}</title>
        <desc>Marker for ${this.placeName}</desc>
        <path stroke="${stroke}" stroke-width="0.35" d="M1.36.19C1.47.06,1.54,0,1.58,0s.14.08.31.23A11.09,11.09,0,0,0,3,1.2l.28.21a.62.62,0,0,1-.24.49c-.33.41-.66.8-1,1.17a.62.62,0,0,1-.29.19c-.25,0-.66-.23-1.22-.79A2.22,2.22,0,0,1,0,1.8,20.24,20.24,0,0,1,1.36.19Z"/>
      </svg>`,
    });
  }
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Map::Marker": typeof MapMarkerComponent;
    "map/marker": typeof MapMarkerComponent;
  }
}
