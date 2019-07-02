import WorkbenchRoute from "wandertext/routes/workbench";
import { inject as service } from "@ember/service";

export default class TextsTextRoute extends WorkbenchRoute {
  @service currentContributor;

  model({ id }) {
    return this.store.findRecord("text", id, {
      include: "entries,entries.place"
    });
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
