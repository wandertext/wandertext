import WorkbenchRoute from "wandertext/routes/workbench";

export default class WorkbenchIndexRoute extends WorkbenchRoute {
  model() {
    return this.store.findRecord("text", "baburnama-1530");
  }
}
