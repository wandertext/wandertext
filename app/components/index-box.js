import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class IndexBoxComponent extends Component {
  @service router;

  @service store;

  @service card;

  @service session;

  @tracked isShowingModal = false;

  @tracked githubUser = null;

  @tracked awaitingAuthentication = false;

  @tracked awaitingGithubProfile = false;

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
  async login() {
    this.awaitingAuthentication = true;
    await this.session.authenticate("authenticator:torii", "github");
    this.awaitingGithubProfile = true;
    this.githubUser = await this.store.findRecord("github-user", "#");
    this.router.transitionTo("workbench");
  }
}
