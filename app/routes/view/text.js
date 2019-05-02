import Route from "@ember/routing/route";

export default class TextRoute extends Route {
  model({ slug }) {
    return this.store.query("text", {
      filter: { slug }
    });
  }
}
