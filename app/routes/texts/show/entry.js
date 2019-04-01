import Route from "@ember/routing/route";

export default class TextsShowEntryRoute extends Route {
  model({ id }) {
    return this.store.findRecord("entry", id);
  }
}
