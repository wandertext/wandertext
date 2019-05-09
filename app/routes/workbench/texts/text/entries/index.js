import Route from "@ember/routing/route";

export default class TextsTextEntriesIndexRoute extends Route {
  model() {
    return this.modelFor("workbench/texts/text");
  }
}
