import Route from "@ember/routing/route";

export default class TextRoute extends Route {
  model({ id }) {
    return this.store.findRecord("text", id);
  }
}
