import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import Store from "@ember-data/store";
import DS from "ember-data";
import TextModel from "wandertext/models/text";

export default class TextsTextRoute extends Route {
  @service declare store: Store;

  model({ textId }: { textId: string }): DS.PromiseObject<TextModel> {
    return this.store.findRecord("text", textId);
  }
}
