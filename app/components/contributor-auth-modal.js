import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ContributorAuthModalComponent extends Component {
  @service router;

  @service store;

  @service session;

  @tracked githubUser = null;

  @tracked awaitingAuthentication = false;

  @tracked awaitingGithubProfile = false;

  @tracked awaitingWandertextProfile = false;

  @action
  async login() {
    await this.session.authenticate("authenticator:torii", "github");
    this.awaitingAuthentication = true;
    this.githubUser = await this.store.findRecord("github-user", "#");
    this.awaitingGithubProfile = true;
    this.session.data.authenticated.githubUsername = this.githubUser.login;
    this.session.data.authenticated.githubAvatarUrl = this.githubUser.avatarUrl;
    const contributor = await this.store.queryRecord("contributor", {
      filter: { username: this.githubUser.login }
    });
    this.session.data.authenticated.currentContributorId = contributor.id;
    this.awaitingWandertextProfile = true;
    this.args.close();
    this.router.transitionTo(
      "workbench.contributors.contributor",
      contributor.username
    );
  }
}
