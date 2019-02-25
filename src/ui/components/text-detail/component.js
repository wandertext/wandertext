import Component from "@ember/component";
import { inject as service } from "@ember-decorators/service";
import { uniq } from "@ember-decorators/object/computed";
import _intersectionBy from "lodash/intersectionBy";

export default class TextDetailComponent extends Component {
  @service data;

  @service theMap;

  @service logo;

  docs = [];

  distinctPlaces = [];

  entries = [];

  placeIds = [];

  contributors = [];

  getContributors() {
    let userIds = [];
    if (this.text && this.text.users) {
      userIds = this.text.users;
    }

    this.entries.forEach(entry => {
      if (entry.users) {
        entry.users.forEach(userId => {
          userIds.push(userId);
        });
      }
    });
    const counts = {};
    userIds.forEach(userId => {
      counts[userId] = counts[userId] ? counts[userId] + 1 : 1;
    });
    const contributors = _intersectionBy(
      this.docs,
      Object.keys(counts).map(id => {
        return { id };
      }),
      "id"
    ).map(user => {
      return {
        firstname: user.firstname,
        lastname: user.lastname,
        name: user.name,
        count: counts[user.id]
      };
    });
    this.set("contributors", contributors);
  }

  @uniq("placeIds") distinctPlaceIds;

  didInsertElement() {
    return this.data.getAll().then(docs => {
      this.set("docs", docs);
      this.set("text", this.docs.filter(d => d.slug === this.get("slug"))[0]);
      this.set(
        "entries",
        this.docs.filter(d => d.type === "entry" && d.text === this.text.id)
      );
      this.set("placeIds", this.entries.map(entry => entry.place));
      this._makePlaces();
      return this.getContributors();
    });
  }

  _makePlaces() {
    const points = _intersectionBy(
      this.docs,
      this.distinctPlaceIds.map(id => {
        return { id };
      }),
      "id"
    );
    this.set("distinctPlaces", points);
    this.theMap.points = points.map(point => {
      point.popup = `<h3>${point.name}</h3>`;
      return point;
    });
    this.theMap.addPoints();
    if (this.slug === "lcaaj") {
      this.set("logo.svg", "vov.svg");
    }
  }
}
