import WorkbenchRoute from "wandertext/routes/workbench";
import query from "wandertext/gql/queries/places.graphql";

export default class WorkbenchPlacesRoute extends WorkbenchRoute {
  model() {
    return this.apollo.watchQuery({ query }, "places");
  }
}
