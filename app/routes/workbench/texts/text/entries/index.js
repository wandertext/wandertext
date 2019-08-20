import WorkbenchRoute from "wandertext/routes/workbench";

export default class TextsTextEntriesIndexRoute extends WorkbenchRoute {
  model() {
    return this.modelFor("workbench/texts/text");
  }
  // Async model() {
  //   const text = this.modelFor("workbench/texts/text");
  //   return text.sideload("entries");
  // }
}
