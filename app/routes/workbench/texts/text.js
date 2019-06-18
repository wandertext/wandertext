import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default class TextsTextRoute extends Route.extend(
  AuthenticatedRouteMixin
) {
  model({ id }) {
    return this.store.findRecord("text", id);
  }
}
