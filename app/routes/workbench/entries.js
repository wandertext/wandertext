import WorkbenchRoute from "wandertext/routes/workbench";
import query from "wandertext/gql/queries/entries";

export default class WorkbenchEntriesRoute extends WorkbenchRoute {
  model() {
    return this.get("apollo").watchQuery({ query }, "entries");
  }
}
