import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class MenuStateService extends Service {
  @tracked menuVisible = false;

  @action toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}

declare module "@ember/service" {
  interface Registry {
    "menu-state": MenuStateService;
  }
}
