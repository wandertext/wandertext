import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { on } from "@ember/modifier";
import { fn } from "@ember/helper";
import Icon from "./icon";
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
  <template>
    <button
      {{on "click" (fn this.click this.icon)}}
      class="rounded-full shadow-lg bg-white border m-2 p-2 absolute bottom-0 right-0 z-50"
      type="button">
      <Icon @role="button" @icon={{this.icon}} />
    </button>
  </template>
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    Fab: typeof FabComponent;
  }
}
