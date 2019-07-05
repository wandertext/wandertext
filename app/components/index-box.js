/* eslint no-console: 1 */
import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class IndexBoxComponent extends Component {
  @service router;

  @service store;

  @service card;

  @service session;

  @service currentContributor;

  @tracked isShowingModal = false;

  @tracked githubUser = null;

  @tracked awaitingAuthentication = false;

  @tracked awaitingGithubProfile = false;

  @tracked awaitingContributor = false;

  @tracked loggedIn = false;

  @tracked loginError = false;

  didInsertElement() {
    this.card.reset();
  }

  @action
  toggleModal() {
    this.isShowingModal = !this.isShowingModal;
  }

  @action
  logout() {
    this.session.invalidate();
  }

  @action
  closeFailure() {
    this.toggleModal();
    this.session.invalidate();
  }

  @action
  async login() {
    this.awaitingAuthentication = true;
    await this.session.authenticate("authenticator:torii", "github");
    this.awaitingGithubProfile = true;
    const githubUser = await this.store.findRecord("github-user", "#");
    this.awaitingContributor = true;
    try {
      const contributor = await this.store.findRecord(
        "contributor",
        githubUser.login
      );
      if (contributor.enabled) {
        this.loggedIn = true;
        this.router.transitionTo("workbench");
      } else {
        throw new Error("Contributor not enabled");
      }
    } catch (error) {
      console.log("error", error);
      this.currentContributor.contributor = null;
      this.loginError = true;
    }
  }
}
