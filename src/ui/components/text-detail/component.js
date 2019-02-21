import Component from "@ember/component";
import { computed } from "@ember-decorators/object";
import { inject as service } from "@ember-decorators/service";
import { uniq } from "@ember-decorators/object/computed";

export default class TextDetailComponent extends Component {
  @service data;

  @service theMap;

  @uniq("places") distinctPlaces;

  @computed("distinctPlaces")
  get distinctPlacesCount() {
    return this.distinctPlaces.length;
  }

  entries = [];

  @computed("entries")
  get entriesCount() {
    return this.entries.length;
  }

  places = [];

  async didInsertElement() {
    const text = await this.data.getTextBySlug(this.get("slug"));
    this.set("text", text);
    const entries = await this.data.getEntriesByText(text.id);
    this.set("entries", entries);
    const places = await entries.map(entry => entry.place);
    this.set("places", places);
    this.theMap.addPoints();
  }
}
