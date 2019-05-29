import Route from "@ember/routing/route";

export default class WorkbenchPlacesRoute extends Route {
  async model() {
    await this.store.loadRecords("place");
    return this.store.peekAll("place");
  }
}
