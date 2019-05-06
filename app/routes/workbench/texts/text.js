import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default class TextsTextRoute extends Route.extend(
  AuthenticatedRouteMixin
) {
  async model({ slug }) {
    const texts = await this.store.loadRecords("text", {
      filter: { slug }
    });
    return texts.firstObject;
  }
}
