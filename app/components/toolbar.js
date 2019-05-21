import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class ToolbarComponent extends Component {
  @service sidenav;

  @action
  handleClick() {
    this.sidenav.toggle();
  }
}