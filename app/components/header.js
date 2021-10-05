import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class HeaderComponent extends Component {
  @service menuState;

  @action handleMenuClick() {
    this.menuState.menuVisible = true;
  }
}
