import Route from "@ember/routing/route";

export default class TextsTextEntriesNewRoute extends Route {
  model() {
    return this.modelFor("workbench/texts/text");
  }
}
