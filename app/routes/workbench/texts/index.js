import Route from "@ember/routing/route";

export default class TextsIndexRoute extends Route {
  async model() {
    await this.store.loadRecords("text");
    return this.store.peekAll("text");
  }
}
