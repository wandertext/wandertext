import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import Store from "@ember-data/store";
import DS from "ember-data";
import TextModel from "wandertext/models/text";

export default class TextsRoute extends Route {
  @service declare store: Store;

  model(): DS.PromiseArray<TextModel> {
    return this.store.findAll("text");
  }
}
