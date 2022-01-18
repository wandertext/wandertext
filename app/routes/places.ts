import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import Store from "@ember-data/store";

type Resolved<P> = P extends Promise<infer T> ? T : P;

export type PlacesRouteModel = Resolved<ReturnType<PlacesRoute["model"]>>;

export default class PlacesRoute extends Route {
  @service declare store: Store;

  model() {
    return this.store.findAll("place");
  }
}
