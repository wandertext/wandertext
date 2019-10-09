/* eslint no-console: 1 */
import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import firebase from "firebase/app";

export default class IndexBoxComponent extends Component {
  @service firebaseApp;

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
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    try {
      const auth = await this.firebaseApp.auth();
      // This will redirect and wrap back around to index.
      await auth.signInWithRedirect(provider);
    } catch (error) {
      console.log("error in login", error);
      this.currentContributor.contributor = null;
      this.loginError = true;
    }
  }
}
