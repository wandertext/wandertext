import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class WorkbenchToolbarComponent extends Component {
  @service card;

  @service sidenav;

  @service paperSidenav;

  @action
  toggleAction() {
    this.paperSidenav.toggle("left");
  }
}
