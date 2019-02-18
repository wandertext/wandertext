import Component from "@ember/component";
import { action } from "@ember-decorators/object";

export default class FloatingBoxComponent extends Component {
  cardCollapsed = false;

  @action
  toggleContent() {
    this.toggleProperty("cardCollapsed");
  }
}
