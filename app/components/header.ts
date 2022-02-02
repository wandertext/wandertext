import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import type MenuState from "wandertext/services/menu-state";
import { IconSlug } from "wandertext";

interface HeaderComponentArgs {
  icon: IconSlug;
  title: string;
}

export default class HeaderComponent extends Component<HeaderComponentArgs> {
  @service declare menuState: MenuState;

  get icon(): IconSlug {
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
    window.history.back();
  }
}
