import Service from "@ember/service";

export default class CardService extends Service {
  title = "Wandertext";

  setTitle(titleThing) {
    let { title } = this;
    if (titleThing.htmlTitle) {
      title = titleThing.htmlTitle;
    } else if (titleThing.title) {
      title = titleThing.title;
    } else if (titleThing.name) {
      title = titleThing.name;
    }

    this.set("title", title);
  }
}
