import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import Store from "@ember-data/store";

type Resolved<P> = P extends Promise<infer T> ? T : P;

export type TextsTextRouteModel = Resolved<ReturnType<TextsTextRoute["model"]>>;

export default class TextsTextRoute extends Route {
  @service declare store: Store;

  model({ textId }: { textId: string }) {
    return this.store.findRecord("text", textId);
  }
}
