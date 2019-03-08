import Component from "@ember/component";
import { inject as service } from "@ember/service";
import config from "../../../../config/environment";

export default class CardHeaderComponent extends Component {
  @service logo;

  rootURL = config.rootURL;
}
