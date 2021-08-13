import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class MenuComponent extends Component {
  @service menuState;

  menuItems = [
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
