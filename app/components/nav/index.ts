import Component from "@glimmer/component";
import type { IconSlug } from "wandertext";

interface MenuItem {
  slug: IconSlug;
  text: string;
  route: string;
}

interface NavIndexComponentSignature {
  Element: Element;
  Blocks: {
    default: [];
  };
}

export default class NavIndexComponent extends Component<NavIndexComponentSignature> {
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

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    Nav: typeof NavIndexComponent;
  }
}
