import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class TheMapComponent extends Component {
  @service theMap;

  divId = "the-map";
}
