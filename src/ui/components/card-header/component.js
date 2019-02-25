import Component from "@ember/component";
import { inject as service } from "@ember-decorators/service";
import config from "../../../../config/environment";

export default class CardHeaderComponent extends Component {
  @service logo;

  rootURL = config.rootURL;
}
