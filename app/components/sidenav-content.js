import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class SidebarContentComponent extends Component {
  @service sidenav;

  @service session;

  @tracked showModal = false;

  @action
  logout() {
    this.session.invalidate();
  }

  @action
  showUserAuthModal() {
    this.showModal = true;
  }

  @action
  closeUserAuthModal() {
    this.showModal = false;
  }
}
