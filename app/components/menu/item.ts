import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import type MenuState from "wandertext/services/menu-state";
import type { IconSlug } from "wandertext";

interface MenuItemComponentSignature {
  Element: HTMLLIElement;
  Args: {
    route: string;
    icon: IconSlug;
  };
  Blocks: {
    default: [];
  };
}

export default class MenuItemComponent extends Component<MenuItemComponentSignature> {
  @service declare menuState: MenuState;
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Menu::Item": typeof MenuItemComponent;
    "menu/item": typeof MenuItemComponent;
  }
}
