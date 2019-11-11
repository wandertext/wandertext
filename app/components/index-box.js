/* eslint no-console: 1 */
import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class IndexBoxComponent extends Component {
  @service currentContributor;

  @service card;

  @service session;

  @tracked loginError = false;

  didInsertElement() {
    this.card.reset();
  }

  @action
  logout() {
    this.session.invalidate();
  }

  @action
  async login() {
    this._loginWithGoogleAndRedirectToIndex();
  }

  async _loginWithGoogleAndRedirectToIndex() {
    return true;
  }
}
