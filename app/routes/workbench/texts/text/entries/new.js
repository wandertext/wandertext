import WorkbenchRoute from "wandertext/routes/workbench";

export default class TextsTextEntriesNewRoute extends WorkbenchRoute {
  model() {
    return this.modelFor("workbench/texts/text");
  }
}
