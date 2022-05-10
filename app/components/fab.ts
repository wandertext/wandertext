import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import type MenuState from "wandertext/services/menu-state";
import type { IconSlug } from "wandertext";

interface FabComponentSignature {
  Element: HTMLButtonElement;
  Args: {
    icon: IconSlug;
  };
}

export default class FabComponent extends Component<FabComponentSignature> {
  @service declare menuState: MenuState;

  get icon(): IconSlug {
    if (this.args.icon) {
      return this.args.icon;
    }

    return "menu";
  }

  get clickActions() {
    return {
      menu: this.menuState.toggleMenu,
    };
  }

  @action click(icon: "menu") {
    this.clickActions[icon]();
  }
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    Fab: typeof FabComponent;
  }
}
