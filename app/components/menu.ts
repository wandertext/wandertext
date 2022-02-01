import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import type MenuState from "wandertext/services/menu-state";
import type { IconSlug } from "wandertext";

interface MenuItem {
  slug: IconSlug;
  text: string;
  route: string;
}

export default class MenuComponent extends Component {
  @service declare menuState: MenuState;

  menuItems: MenuItem[] = [
    {
      slug: "text",
      text: "Texts",
      route: "texts",
    },
    {
      slug: "place",
      text: "Places",
      route: "places",
    },
    {
      slug: "contributors",
      text: "Contributors",
      route: "contributors",
    },
    {
      slug: "about",
      text: "About",
      route: "about",
    },
    {
      slug: "help",
      text: "Help",
      route: "help",
    },
    {
      slug: "credits",
      text: "Credits",
      route: "credits",
    },
    {
      slug: "privacy",
      text: "Privacy",
      route: "privacy",
    },
    {
      slug: "login",
      text: "Login",
      route: "login",
    },
  ];
}
