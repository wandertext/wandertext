import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class UserAuthModalComponent extends Component {
  @service store;

  @service session;

  @tracked githubUser = null;

  @action
  async login() {
    await this.session.authenticate("authenticator:torii", "github");
    this.githubUser = await this.store.findRecord("github-user", "#");
    this.session.data.authenticated.githubUsername = this.githubUser.login;
  }
}
