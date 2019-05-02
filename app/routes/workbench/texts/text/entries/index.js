import Route from "@ember/routing/route";

export default class TextsTextEntriesIndexRoute extends Route {
  model() {
    const text = this.modelFor("workbench/texts/text");
    return text.entries;
  }
}
