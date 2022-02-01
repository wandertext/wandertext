import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import type MenuState from "wandertext/services/menu-state";
import type { IconSlug } from "wandertext";

interface MenuItemComponentArgs {
  route: string;
  icon: IconSlug;
}

export default class MenuItemComponent extends Component<MenuItemComponentArgs> {
  @service declare menuState: MenuState;
}
