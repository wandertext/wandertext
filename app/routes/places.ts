import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import Store from "@ember-data/store";

export type PlacesRouteModel = Awaited<ReturnType<PlacesRoute["model"]>>;

export default class PlacesRoute extends Route {
  @service declare store: Store;

  model() {
    return this.store.findAll("place");
  }
}
