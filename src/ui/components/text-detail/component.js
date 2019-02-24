import Component from "@ember/component";
import { inject as service } from "@ember-decorators/service";
import { uniq } from "@ember-decorators/object/computed";
import _intersectionBy from "lodash/intersectionBy";

export default class TextDetailComponent extends Component {
  @service data;

  @service theMap;

  distinctPlaces = [];

  entries = [];

  placeIds = [];

  users = ["Moacir", "Manan", "Isabelle"];

  @uniq("placeIds") distinctPlaceIds;

  didInsertElement() {
    return this.data
      .getTextBySlug(this.get("slug"))
      .then(text => {
        this.set("text", text);
        return this.data.getEntriesByText(text.id);
      })
      .then(entries => {
        this.set("entries", entries);
        return entries.map(entry => entry.place);
      })
      .then(placeIds => {
        this.set("placeIds", placeIds);
        return this._makePlaces();
      });
  }

  _makePlaces() {
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
        this.set("distinctPlaces", points);
        this.theMap.points = points;
        this.theMap.addPoints();
      });
  }
}
