import WorkbenchRoute from "wandertext/routes/workbench";
import query from "wandertext/gql/queries/text";

export default class TextsTextRoute extends WorkbenchRoute {
  model({ id }) {
    const variables = { id };
    return this.get("apollo").watchQuery({ query, variables }, "text");
  }
}
