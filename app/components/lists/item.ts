import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import Text from "wandertext/models/text";
import Place from "wandertext/models/place";
import { Marker } from "wandertext";
import Contributor from "wandertext/models/contributor";
import Entry from "wandertext/models/entry";

interface ListsItemComponentSignature {
  Args: {
    model: Text | Place | Contributor | Entry;
    linkToRoute: string; // Probably wrong.
  };
}

export default class ListsItemComponent extends Component<ListsItemComponentSignature> {
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
    "Lists::Item": typeof ListsItemComponent;
    "lists/item": typeof ListsItemComponent;
  }
}
