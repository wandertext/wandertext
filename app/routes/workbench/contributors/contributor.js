import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default class WorkbenchContributorsContributorRoute extends Route.extend(
  AuthenticatedRouteMixin
) {
  @service currentContributor;

  async model({ username }) {
    let contributor;
    if (
      this.currentContributor.contributor &&
      username === this.currentContributor.contributor.username
    ) {
      contributor = await this.store.findRecord(
        "contributor",
        this.currentContributor.contributor.id
      );
    } else {
      contributor = await this.store.queryRecord("contributor", {
        filter: { username }
      });
    }

    return contributor;
  }
}
