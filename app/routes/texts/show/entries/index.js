import Route from "@ember/routing/route";

export default class TextsShowEntriesIndexRoute extends Route {
  model() {
    const { entries } = this.modelFor("text");
    return entries;
  }
}
