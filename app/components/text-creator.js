import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class TextCreatorComponent extends Component {
  @service store;

  @tracked title = "";

  @action createRecord(event) {
    event.preventDefault();
    const newText = this.store.createRecord("text", { title: this.title });
    newText.save();
  }
}
