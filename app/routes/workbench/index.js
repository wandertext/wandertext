import WorkbenchRoute from "wandertext/routes/workbench";
import { inject as service } from "@ember/service";
import { hash } from "rsvp";

export default class WorkbenchIndexRoute extends WorkbenchRoute {
  @service currentContributor;

  async model() {
    const contributor = await this.currentContributor.contributor;
    const text = await this.store.findRecord("text", "baburnama-1530");
    return hash({ contributor, text });
  }
}
