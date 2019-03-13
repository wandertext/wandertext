import Component from "@glimmer/component";
import { action } from "@ember-decorators/object";
import { inject as service } from "@ember/service";

export default class FloatingBoxComponent extends Component {
  @service card;

  @service router;

  @service sidenav;

  @service paperSidenav;

  @action
  toggleAction() {
    this.paperSidenav.toggle("left");
    if (this.sidenav.linkList[0].text !== this.card.title) {
      this.sidenav.linkList.unshiftObject({
        text: this.card.title,
        icon: "info",
        route: this.router.currentRouteName
      });
    }
  }
}
