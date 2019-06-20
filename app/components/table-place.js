import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class TablePlaceComponent extends Component {
  @tracked place = this.args.entry.place;
}
