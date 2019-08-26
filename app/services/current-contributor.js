import Service, { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { queryManager } from "ember-apollo-client";
import query from "wandertext/gql/queries/contributor.graphql";
import config from "wandertext/config/environment";

export default class CurrentContributorService extends Service {
  @queryManager apollo;

  @service session;

  @tracked contributor = null;

  async load() {
    if (this.session.isAuthenticated) {
      if (!this.contributor) {
        try {
          let contributor;
          if (config.firestoreOn === true) {
            const variables = {
              id: this.session.data.authenticated.user.uid
            };
            contributor = await this.apollo.watchQuery(
              { query, variables },
              "contributor"
            );
          }

          if (contributor.enabled) {
            this.contributor = contributor;
            return this.contributor;
          }

          throw new Error("user is not enabled");
        } catch {
          this.session.invalidate();
        }
      }

      return this.contributor;
    }

    this.contributor = null;
    return null;
  }
}
