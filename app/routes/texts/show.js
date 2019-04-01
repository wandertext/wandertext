import Route from "@ember/routing/route";

export default class TextsShowRoute extends Route {
  model({ slug }) {
    return this.store.queryRecord("text", {
      filter: { slug }
    });
  }
}
