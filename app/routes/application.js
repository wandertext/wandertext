import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";

export default class ApplicationRoute extends Route.extend(
  ApplicationRouteMixin
) {
  @service currentContributor;

  beforeModel() {
    return this._loadCurrentUser();
  }

  sessionAuthenticated() {
    super.sessionAuthenticated();
    this._loadCurrentUser();
  }

  async _loadCurrentUser() {
    try {
      return this.currentContributor.load();
    } catch {
      this.session.invalidate();
    }
  }
}
