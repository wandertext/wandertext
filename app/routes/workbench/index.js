import WorkbenchRoute from "wandertext/routes/workbench";
import { inject as service } from "@ember/service";
import query from "wandertext/gql/queries/text.graphql";
import { hash } from "rsvp";

export default class WorkbenchIndexRoute extends WorkbenchRoute {
  @service currentContributor;

  async model() {
    const contributor = await this.currentContributor.contributor;
    const variables = { id: "baburnama-1530" };
    const text = await this.apollo.watchQuery({ query, variables }, "text");
    return hash({ contributor, text });
  }
}
