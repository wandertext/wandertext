import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import Text from "wandertext/models/text";
import Place from "wandertext/models/place";

interface ListItemComponentArgs {
  model: Text | Place;
  linkToRoute: string; // Also probably wrong.
}

export default class ListItemComponent extends Component<ListItemComponentArgs> {
  @tracked
  mapVisible = false;

  get markers() {
    const model = this.args.model;
    if (model instanceof Text) {
      return [...new Set(model.entries.map(entry => entry.place))];
    }

    if (model instanceof Place) {
      return [model];
    }

    return [];
  }

  @action
  toggleMap() {
    this.mapVisible = !this.mapVisible;
  }
}
