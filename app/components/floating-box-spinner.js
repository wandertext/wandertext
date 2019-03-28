import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class FloatingBoxSpinnerComponent extends Component {
  @tracked height;

  get diameter() {
    return 0.5 * this.height;
  }

  get style() {
    return `min-height: ${this.height}px;`;
  }

  constructor(...args) {
    super(...args);
    this.height = 0.4 * window.innerHeight;
  }
}
