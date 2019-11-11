import Service, { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { queryManager } from "ember-apollo-client";
import query from "wandertext/gql/queries/contributor.graphql";

export default class CurrentContributorService extends Service {
  @queryManager apollo;

  @service session;

  @tracked contributor = null;

  async load() {
    const variables = {
      id: "Z4aKFSu4FNYvB17YJUOx0hjlPH52"
    };
    const contributor = await this.apollo.watchQuery(
      { query, variables },
      "contributor"
    );
    if (contributor.enabled) {
      this.contributor = contributor;
      return this.contributor;
    }
  }
}
