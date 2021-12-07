import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class HeaderComponent extends Component {
  @service menuState;

  get icon() {
    if (this.args.icon) {
      return this.args.icon;
    }

    return "logo";
  }

  get title() {
    if (this.args.title) {
      return this.args.title;
    }

    return "Wandertext";
  }

  @action handleMenuClick() {
    this.menuState.menuVisible = true;
  }

  @action goBack() {
    window.history.back(); // eslint-disable-line no-undef
  }
}
