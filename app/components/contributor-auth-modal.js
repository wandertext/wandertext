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

  @action
  async login() {
    await this.session.authenticate("authenticator:torii", "github");
    this.awaitingAuthentication = true;
    this.githubUser = await this.store.findRecord("github-user", "#");
    this.args.close();
    this.router.transitionTo(
      "workbench.contributors.contributor",
      this.githubUser.login
    );
  }
}
