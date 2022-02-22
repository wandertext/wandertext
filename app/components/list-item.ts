import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

interface ListItemComponentArgs {
  model: string; // This is completely wrong.
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
