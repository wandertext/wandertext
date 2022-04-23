import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import type Text from "wandertext/models/text";
import type Place from "wandertext/models/place";

interface ListItemComponentArgs {
  model: Text | Place;
  linkToRoute: string; // Also probably wrong.
}

export default class ListItemComponent extends Component<ListItemComponentArgs> {
  @tracked
  mapVisible = false;

  @action
  toggleMap() {
    this.mapVisible = !this.mapVisible;
  }
}
