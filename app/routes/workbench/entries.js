import Route from "@ember/routing/route";

export default class WorkbenchEntriesRoute extends Route {
  async model() {
    await this.store.loadRecords("entry", { include: "place" });
    return this.store.peekAll("entry");
  }
}
