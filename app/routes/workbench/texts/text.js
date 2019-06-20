import WorkbenchRoute from "wandertext/routes/workbench";

export default class TextsTextRoute extends WorkbenchRoute {
  model({ id }) {
    return this.store.findRecord("text", id, {
      include: "entries,entries.place"
    });
  }
}
