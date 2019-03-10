import Component from "@ember/component";

export default class SidebarContentComponent extends Component {
  sidenavList = [
    { text: "Home", icon: "home", route: "index" },
    { text: "Places", icon: "place", route: "places" },
    { text: "Texts", icon: "library_books", route: "texts" },
    { text: "About", icon: "info", route: "about" }
  ];
}
