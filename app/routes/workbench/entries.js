import Route from "@ember/routing/route";

export default class WorkbenchEntriesRoute extends Route {
  async model() {
    return this.store.findAll("entry");
  }
}
