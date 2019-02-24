import Component from "@ember/component";
import { computed } from "@ember-decorators/object";

export default class TextPlacesComponent extends Component {
  elementId = "text-places";

  @computed("distinctPlaces")
  get distinctPlacesCount() {
    return this.distinctPlaces.length;
  }
}
