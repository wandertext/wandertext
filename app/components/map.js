import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class MapComponent extends Component {
  @service modals;

  @action openDefaultModal(content) {
    this.modals.open(`modals/${content}`);
  }
}
