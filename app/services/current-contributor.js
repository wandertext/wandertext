import Service, { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class CurrentContributorService extends Service {
  @service session;

  @service store;

  @tracked contributor;

  async load() {
    let contributor;
    if (this.session.isAuthenticated) {
      if (this.contributor) {
        contributor = this.contributor;
      } else {
        const githubUser = await this.store.findRecord("github-user", "#");
        const contributors = await this.store.query("contributor", {
          filter: { username: githubUser.login }
        });
        if (contributors) {
          contributor = contributors.firstObject;
          contributor.githubAvatarUrl = githubUser.avatarUrl;
        }

        this.contributor = contributor;
      }
    } else {
      this.contributor = null;
      contributor = null;
    }

    return contributor;
  }
}
