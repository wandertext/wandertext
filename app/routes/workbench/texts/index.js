import WorkbenchRoute from "wandertext/routes/workbench";

export default class TextsIndexRoute extends WorkbenchRoute {
  async model() {
    await this.store.loadRecords("text");
    return this.store.peekAll("text");
  }
}
