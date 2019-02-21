import Component from "@ember/component";
import { action } from "@ember-decorators/object";

export default class FloatingBoxComponent extends Component {
  cardCollapsed = false;

  classNames = ["m-3 card"];

  elementId = "floating-box";

  @action
  toggleContent() {
    this.toggleProperty("cardCollapsed");
  }
}
