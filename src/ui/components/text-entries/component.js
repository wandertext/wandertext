import Component from "@ember/component";
import { computed } from "@ember-decorators/object";

export default class TextEntriesComponent extends Component {
  elementId = "text-entries";

  @computed("entries")
  get entriesCount() {
    let length = 0;
    if (this.entries) {
      length = this.entries.length;
    }

    return length;
  }
}
