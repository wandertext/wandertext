import Component from "@glimmer/component";

export default class MenuComponent extends Component {
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
