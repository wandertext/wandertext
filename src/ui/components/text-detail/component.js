import Component from "@ember/component";
import { observes, computed } from "@ember-decorators/object";
import { inject as service } from "@ember-decorators/service";
import { uniq } from "@ember-decorators/object/computed";
import _intersectionBy from "lodash/intersectionBy";

export default class TextDetailComponent extends Component {
  @service data;

  @service theMap;

  @uniq("placeIds") distinctPlaceIds;

  @observes("distinctPlaceIds")
  async placeIdsDidChange() {
    this.data
      .getAllByType("place")
      .then(places => {
        return _intersectionBy(
          places,
          this.distinctPlaceIds.map(id => {
            return { id };
          }),
          "id"
        );
      })
      .then(points => {
        this.theMap.points = points;
        this.theMap.addPoints();
      });
  }

  @computed("distinctPlaceIds")
  get distinctPlaceIdsCount() {
    return this.distinctPlaceIds.length;
  }

  entries = [];

  @computed("entries")
  get entriesCount() {
    return this.entries.length;
  }

  placeIds = [];

  async didInsertElement() {
    const text = await this.data.getTextBySlug(this.get("slug"));
    this.set("text", text);
    const entries = await this.data.getEntriesByText(text.id);
    this.set("entries", entries);
    const placeIds = await entries.map(entry => entry.place);
    this.set("placeIds", placeIds);
  }
}
