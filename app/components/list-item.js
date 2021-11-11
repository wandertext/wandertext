import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ListItemComponent extends Component {
  @tracked
  mapVisible = false;

  @action
  toggleMap() {
    this.mapVisible = !this.mapVisible;
  }
}
