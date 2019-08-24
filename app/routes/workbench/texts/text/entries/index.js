import { task } from "ember-concurrency";
import WorkbenchRoute from "wandertext/routes/workbench";
import query from "wandertext/gql/queries/textWithEntries.graphql";

export default class TextsTextEntriesIndexRoute extends WorkbenchRoute {
  model() {
    return {
      text: this.textWithEntries.perform()
    };
  }

  @(task(function*() {
    // This is *hilariously* redundant.
    const textModel = yield this.modelFor("workbench/texts/text");
    const variables = { id: textModel.id };
    const text = yield this.apollo.watchQuery({ query, variables }, "text");
    return text;
  }).cancelOn("deactivate"))
  textWithEntries;
}
