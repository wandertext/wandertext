import WorkbenchRoute from "wandertext/routes/workbench";
import query from "wandertext/gql/queries/text.graphql";

export default class WorkbenchTextsTextRoute extends WorkbenchRoute {
  model({ id }) {
    const variables = { id };
    return this.apollo.watchQuery({ query, variables }, "text");
  }

  /*
   * This will work once contributors is an array of IDs, not an array of 
   * actual Contributor objects. I think.
  afterModel(model) {
    if (
      model.contributors.filter(
        c => c === this.currentContributor.contributor.id
      ).length === 0
    ) {
      this.transitionTo("workbench.texts");
    }
  }
  */
}
