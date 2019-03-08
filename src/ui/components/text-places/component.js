import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class TextPlacesComponent extends Component {
  @tracked distinctPlacesCount;

  constructor(...args) {
    super(...args);
    this.setDistinctPlacesCount();
  }

  setDistinctPlacesCount() {
    let length = 0;
    if (this.args.distinctPlaces) {
      length = this.args.distinctPlaces.length;
    }

    this.distinctPlacesCount = length;
  }
}
