import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { Marker } from "wandertext";
import Contributor from "wandertext/models/contributor";
import Entry from "wandertext/models/entry";
import Place from "wandertext/models/place";
import Text from "wandertext/models/text";

interface ListItemComponentSignature {
  Args: {
    model: Text | Place | Contributor | Entry;
    linkToRoute: string; // Probably wrong.
  };
}

export default class ListItemComponent extends Component<ListItemComponentSignature> {
  @tracked
  mapVisible = false;

  get markers() {
    const model = this.args.model;
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
