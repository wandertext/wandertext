import Route from "@ember/routing/route";

export default class TextsShowEntriesNewRoute extends Route {
  model() {
    return this.modelFor("texts/show");
  }
}
