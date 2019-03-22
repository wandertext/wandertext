import Route from "@ember/routing/route";

export default class TextRoute extends Route {
  model({ slug }) {
    return { slug };
  }
}
