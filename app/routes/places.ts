import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import Store from "@ember-data/store";
import DS from "ember-data";
import PlaceModel from "wandertext/models/place";

export default class PlacesRoute extends Route {
  @service declare store: Store;

  model(): DS.PromiseArray<PlaceModel> {
    return this.store.findAll("place");
  }
}
