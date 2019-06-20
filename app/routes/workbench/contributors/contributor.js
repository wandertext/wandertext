import WorkbenchRoute from "wandertext/routes/workbench";
import query from "wandertext/gql/queries/contributor";

export default class WorkbenchContributorsContributorRoute extends WorkbenchRoute {
  model({ id }) {
    const variables = { id };
    return this.get("apollo").watchQuery({ query, variables }, "contributor");
  }
}
