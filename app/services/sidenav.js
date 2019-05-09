import Service from "@ember/service";

export default class SidenavService extends Service {
  show = false;

  toggle() {
    return true;
  }

  linkList = [
    { text: "Wandertext", icon: "home", route: "index" },
    { text: "Places", icon: "place", route: "places" },
    { text: "Texts", icon: "library_books", route: "texts" },
    { text: "About", icon: "info", route: "about" }
  ];
}
