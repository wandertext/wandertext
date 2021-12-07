import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class FabComponent extends Component {
  @service menuState;

  get icon() {
    if (this.args.icon) {
      return this.args.icon;
    }

    return "menu";
  }

  actions = {
    menu: this.menuState.toggleMenu,
  };

  @action click(icon) {
    return this.actions[icon]();
  }
}
