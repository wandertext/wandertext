import WorkbenchRoute from "wandertext/routes/workbench";

export default class TextsIndexRoute extends WorkbenchRoute {
  model() {
    return this.store.query("text", {
      filter: {
        public: true
      }
    });
  }
}
