import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import Store from "@ember-data/store";

export type ContributorsRouteModel = Awaited<
  ReturnType<ContributorsRoute["model"]>
>;

export default class ContributorsRoute extends Route {
  @service declare store: Store;

  model() {
    return this.store.findAll("contributor");
  }
}
