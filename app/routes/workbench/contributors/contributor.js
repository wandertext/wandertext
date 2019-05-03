import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default class WorkbenchContributorsContributorRoute extends Route.extend(
  AuthenticatedRouteMixin
) {
  async model({ username }) {
    let contributor;
    if (username === this.session.data.authenticated.githubUsername) {
      contributor = this.store.findRecord(
        "contributor",
        this.session.data.authenticated.currentContributorId
      );
    } else {
      contributor = this.store.queryRecord("contributor", {
        filter: { username }
      });
    }

    return contributor;
  }
}
