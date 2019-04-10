import Route from "@ember/routing/route";

export default class TextsTextEntriesIndexRoute extends Route {
  model({ slug }) {
    console.log("slug", slug);
    console.log("paramsfor", this);
    const text = this.modelFor("show");
    console.log("text", text);
    console.log("text.entries", text.entries);
    // Return entries;
  }
}
