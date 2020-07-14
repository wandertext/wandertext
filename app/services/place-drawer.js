import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class PlaceDrawerService extends Service {
  @tracked
  visible = false;

  toggleVisibility() {
    this.visible = !this.visible;
    return this.visible;
  }
}
