import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class TextCreatorComponent extends Component {
  @service store;

  @action createRecord() {
    this.store.createRecord("text", { title: "Moby-Dick" });
  }
}
