import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class TextsTextRoute extends Route {
  @service store;

  async model({ textId }) {
    return this.store.findRecord("text", textId);
  }
}
