import Service, { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class CurrentContributorService extends Service {
  @service session;

  @service store;

  @tracked contributor;

  async load() {
    if (!this.contributor && this.session.isAuthenticated) {
      this.contributor = await this.store.queryRecord("contributor", {
        filter: { username: this.session.data.authenticated.githubUsername }
      });
    }

    return this.contributor;
  }
}
