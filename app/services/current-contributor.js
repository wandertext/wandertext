import Service, { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import config from "wandertext/config/environment";

export default class CurrentContributorService extends Service {
  @service session;

  @service store;

  @tracked contributor = null;

  async load() {
    if (this.session.isAuthenticated) {
      if (!this.contributor) {
        try {
          let contributor;
          if (config.firestoreOn === true) {
            const { uid } = this.session.data.authenticated.user;
            contributor = await this.store.loadRecord("contributor", uid);
          } else {
            contributor = await this.store.loadRecord(
              "contributor",
              "muziejus"
            );
          }

          if (contributor.enabled) {
            this.contributor = contributor;
            return this.contributor;
          }

          throw new Error("user is not enabled");
        } catch {
          this.session.invalidate();
        }
      }

      return this.contributor;
    }

    this.contributor = null;
    return null;
  }
}
