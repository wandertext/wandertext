import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class PlaceCreatorComponent extends Component {
  @service store;

  @tracked name = "";

  @action createRecord(event) {
    event.preventDefault();
    const newPlace = this.store.createRecord("place", { name: this.name });
    newPlace.save();
  }
}
