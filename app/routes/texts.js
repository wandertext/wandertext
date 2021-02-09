import Route from "@ember/routing/route";

export default class TextsRoute extends Route {
  async model() {
    return this.store.findAll("text");
  }
}
