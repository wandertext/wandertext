import WorkbenchRoute from "wandertext/routes/workbench";
import query from "wandertext/gql/queries/textWithEntries";

export default class TextsTextEntriesIndexRoute extends WorkbenchRoute {
  async model() {
    const text = await this.modelFor("workbench/texts/text");
    const variables = { id: text.id };
    return this.get("apollo").watchQuery({ query, variables }, "text");
  }
}
