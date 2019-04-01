import Route from "@ember/routing/route";

export default class TextsIndexRoute extends Route {
  model() {
    return this.store.findAll("text");
  }
}
