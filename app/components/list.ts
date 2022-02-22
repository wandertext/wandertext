import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import Router from "@ember/routing/router";

export default class ListComponent extends Component {
  @service declare router: Router;
}
