import WorkbenchRoute from "wandertext/routes/workbench";
import { inject as service } from "@ember/service";

export default class WorkbenchIndexRoute extends WorkbenchRoute {
  @service currentContributor;

  model() {
    return this.currentContributor.contributor;
  }
}
