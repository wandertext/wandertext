import WorkbenchRoute from "wandertext/routes/workbench";

export default class TextsTextEntriesIndexRoute extends WorkbenchRoute {
  model() {
    return this.modelFor("workbench/texts/text").sideload(
      "entries,entries.place,entries.contributors"
    );
  }
}
