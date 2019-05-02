import Route from "@ember/routing/route";

export default class TextsTextRoute extends Route {
  model({ slug }) {
    return this.store.queryRecord(
      "text",
      {
        filter: { slug }
      },
      { include: "entries" }
    );
  }
}
