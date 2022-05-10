import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import Store from "@ember-data/store";

export type TextsRouteModel = Awaited<ReturnType<TextsRoute["model"]>>;

export default class TextsRoute extends Route {
  @service declare store: Store;

  model() {
    return this.store.findAll("text", { include: "entries,entries.place" });
  }
}
