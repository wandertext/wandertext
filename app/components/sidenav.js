import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class SidenavComponent extends Component {
  @service sidenav;

  toggleSidenav() {
    if (this.sidenav.show) {
      this.sidenav.show = false;
    } else {
      this.sidenav.show = true;
    }
  }
}
