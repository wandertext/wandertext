import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class SidenavContentComponent extends Component {
  @service sidenav;

  @service session;

  @tracked showModal = false;

  @action
  logout() {
    this.session.invalidate();
  }

  @action
  showContributorAuthModal() {
    this.showModal = true;
  }

  @action
  closeContributorAuthModal() {
    this.showModal = false;
  }
}
