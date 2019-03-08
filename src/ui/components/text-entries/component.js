import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class TextEntriesComponent extends Component {
  @tracked entriesCount;

  constructor(...args) {
    super(...args);
    this.setEntriesCount();
  }

  setEntriesCount() {
    let length = 0;
    if (this.args.entries) {
      length = this.args.entries.length;
    }

    this.entriesCount = length;
  }
}
