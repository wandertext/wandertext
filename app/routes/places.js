import Route from "@ember/routing/route";

export default class PlacesRoute extends Route {
  async model() {
    return this.store.findAll("place");
  }
}
