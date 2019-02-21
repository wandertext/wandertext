import Component from "@ember/component";
import { computed } from "@ember-decorators/object";
import { inject as service } from "@ember-decorators/service";

export default class TextDetailComponent extends Component {
  @service data;

  distinctPlaces = [];

  @computed("distinctPlaces")
  get distinctPlacesCount() {
    return this.distinctPlaces.length;
  }

  entries = [];

  @computed("entries")
  get entriesCount() {
    return this.entries.length;
  }

  async didInsertElement() {
    const text = await this.data.getTextBySlug(this.get("slug"));
    this.set("text", text);
    const entries = await this.data.getEntriesByText(text.id);
    this.set("entries", entries);
  }
}
