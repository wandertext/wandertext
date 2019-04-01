import Route from "@ember/routing/route";

export default class TextsNewRoute extends Route {
  model() {
    return this.store.createRecord("text");
  }
}
