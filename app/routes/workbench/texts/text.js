import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default class TextsTextRoute extends Route.extend( 
  AuthenticatedRouteMixin
) {
  async model({ slug }) {
    const texts = this.store.loadRecords(
      "text",
      {
        filter: { slug }
      },
      { include: "entries" }
    );
    return texts.firstObject;
  }
}
