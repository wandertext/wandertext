import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import Store from "@ember-data/store";
import DS from "ember-data";
import ContributorModel from "wandertext/models/contributor";

export default class ContributorsRoute extends Route {
  @service declare store: Store;

  model(): DS.PromiseArray<ContributorModel> {
    return this.store.findAll("contributor");
  }
}
