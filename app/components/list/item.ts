import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { Marker } from "wandertext";
import Contributor from "wandertext/models/contributor";
import Entry from "wandertext/models/entry";
import Place from "wandertext/models/place";
import Text from "wandertext/models/text";

interface ListItemComponentSignature {
  Element: HTMLLIElement;
  Args: {
    item: Text | Place | Contributor | Entry;
    linkToRoute: string; // Probably wrong.
  };
}

export default class ListItemComponent extends Component<ListItemComponentSignature> {
  @tracked
  mapVisible = false;

  get markerBounds() {
    const markers = this.markers;
    if (markers && markers.length > 0) {
      const coordinates = markers.filter((marker: Marker): marker is Marker =>
        Boolean(marker.latitude && marker.longitude)
      );
      const bounds: [number, number][] = coordinates.map(marker => [
        1.1 * marker.latitude,
        1.1 * marker.longitude,
      ]);

      return bounds;
    }
  }

  get markers() {
    const model = this.args.item;
    if (model instanceof Text) {
      return [...new Set(model.entries.map(entry => entry.place))] as Marker[];
    }

    // if (model instanceof Place) {
    //   return [model];
    // }

    return [];
  }

  @action
  toggleMap() {
    this.mapVisible = !this.mapVisible;
  }
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "List::Item": typeof ListItemComponent;
    "list/item": typeof ListItemComponent;
  }
}
