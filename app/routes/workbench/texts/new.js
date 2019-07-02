import Route from "@ember/routing/route";

export default class TextsNewRoute extends Route {
  beforeModel() {
    this.transitionTo("workbench.texts");
  }

  model() {
    return this.store.createRecord("text");
  }
}
