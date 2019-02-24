import Component from "@ember/component";
import { computed } from "@ember-decorators/object";

export default class TextEntriesComponent extends Component {
  elementId = "text-entries";

  @computed("entries")
  get entriesCount() {
    return this.entries.length;
  }
}
