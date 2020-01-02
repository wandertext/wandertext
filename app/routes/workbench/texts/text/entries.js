import WorkbenchRoute from "wandertext/routes/workbench";

export default class TextsTextEntriesRoute extends WorkbenchRoute {
  model() {
    return this.modelFor("workbench/texts/text");
  }
}
