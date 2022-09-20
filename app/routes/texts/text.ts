import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import Store from "@ember-data/store";

export type TextsTextRouteModel = Awaited<ReturnType<TextsTextRoute["model"]>>;

export default class TextsTextRoute extends Route {
  @service declare store: Store;

  model({ text_id }: { text_id: string }) {
    return this.store.findRecord("text", text_id);
  }
}
