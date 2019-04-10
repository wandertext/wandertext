import Route from "@ember/routing/route";

export default class TextsTextEntriesNewRoute extends Route {
  model() {
    // Const text = this.modelFor("texts/show");
    return this.modelFor("texts/text");
  }
}
