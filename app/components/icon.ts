import Component from "@glimmer/component";
import { IconSlug } from "wandertext";

interface IconComponentArgs {
  role?: string;
  icon?: IconSlug;
}

export default class IconComponent extends Component<IconComponentArgs> {
  icons: Record<string, { title: string; desc: string }> = {
    logo: {
      title: "Wandertext Logo",
      desc: "The Wandertext logo, a nastaʼlīq wāw.",
    },
    entry: {
      title: "Entry Icon",
      desc: "A sheet of paper logo indicating an entry or entries.",
    },
    place: {
      title: "Place Icon",
      desc: "A point of interest logo indicating a place.",
    },
    text: {
      title: "Text Icon",
      desc: "A book logo indicating one or more texts.",
    },
    menu: {
      title: "Menu Icon",
      desc: "A “hamburger” icon indicating a menu.",
    },
    close: {
      title: "Close Icon",
      desc: "A large X icon that closes a modal.",
    },
    contributors: {
      title: "Contributors Icon",
      desc: "An icon of contributors.",
    },
    about: {
      title: "About Icon",
      desc: "An about icon.",
    },
    help: {
      title: "Help Icon",
      desc: "A help icon",
    },
    credits: {
      title: "Credits Icon",
      desc: "A feather icon indicating credits.",
    },
    privacy: {
      title: "Privacy Icon",
      desc: "A box icon indicating privacy.",
    },
    login: {
      title: "Login Icon",
      desc: "A key icon indicating a login.",
    },
    stats: {
      title: "Statistics Icon",
      desc: "A pie chart indicating statistics.",
    },
    "caret-right": {
      title: "Caret",
      desc: "A Right-pointing caret",
    },
    "caret-left": {
      title: "Caret",
      desc: "A Left-pointing caret",
    },
    "caret-up": {
      title: "Caret",
      desc: "An up-pointing caret",
    },
    "caret-down": {
      title: "Caret",
      desc: "A down-pointing caret",
    },
    map: {
      title: "Map",
      desc: "A map",
    },
  };

  get title() {
    return this.icons[this.icon].title;
  }

  get desc() {
    return this.icons[this.icon].desc;
  }

  get icon() {
    if (this.args.icon) {
      return this.args.icon;
    }

    return "entry";
  }

  get role() {
    if (this.args.role) {
      return this.args.role;
    }

    return "img";
  }
}
