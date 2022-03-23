import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import type Modals from "ember-promise-modals";

export default class MapComponent extends Component {
  lat = 40.712_778;

  lng = -74.006_111;

  @service declare modals: Modals;

  @action openDefaultModal(content: string) {
    this.modals.open(`modals/${content}`);
  }
}
