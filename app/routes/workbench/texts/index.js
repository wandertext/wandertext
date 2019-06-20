import WorkbenchRoute from "wandertext/routes/workbench";
import query from "wandertext/gql/queries/texts";

export default class TextsIndexRoute extends WorkbenchRoute {
  model() {
    return this.get("apollo").watchQuery({ query }, "texts");
  }
}
