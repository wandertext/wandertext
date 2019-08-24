import WorkbenchRoute from "wandertext/routes/workbench";
import query from "wandertext/gql/queries/publicTexts.graphql";

export default class TextsIndexRoute extends WorkbenchRoute {
  model() {
    return this.apollo.watchQuery({ query }, "publicTexts");
  }
}
