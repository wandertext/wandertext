import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default class WorkbenchContributorsContributorRoute extends Route.extend(
  AuthenticatedRouteMixin
) {
  async model({ username }) {
    const contributors = await this.store.loadRecords("contributor", {
      filter: { username }
    });
    return contributors.firstObject;
  }
}
