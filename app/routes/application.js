import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class AppRoute extends Route {
  @service session;

  beforeModel(transition) {
    return this.session.requireAuthentication(transition, "index");
  }
}
