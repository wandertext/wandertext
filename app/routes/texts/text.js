import Route from "@ember/routing/route";

export default class TextsTextRoute extends Route {
  async model({ textId }) {
    return this.store.findRecord("text", textId);
  }
}
