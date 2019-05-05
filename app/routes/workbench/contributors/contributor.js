import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default class WorkbenchContributorsContributorRoute extends Route.extend(
  AuthenticatedRouteMixin
) {
  model({ username }) {
    return this.store.queryRecord("contributor", {
      filter: { username },
      include: "texts"
    });
  }
}
