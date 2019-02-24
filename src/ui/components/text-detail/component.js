import Component from "@ember/component";
import { inject as service } from "@ember-decorators/service";
import { uniq } from "@ember-decorators/object/computed";

export default class TextDetailComponent extends Component {
  @service data;

  @service theMap;

  distinctPlaces = [];

  entries = [];

  placeIds = [];

  contributors = [];

  async getContributors() {
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
    this.data.getListFromTypeAndIds("user", Object.keys(counts)).then(users => {
      const contributors = users.map(user => {
        return {
          firstname: user.firstname,
          lastname: user.lastname,
          name: user.name,
          count: counts[user.id]
        };
      });
      this.set("contributors", contributors);
    });
  }

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
      })
      .then(() => {
        return this.getContributors();
      });
  }

  async _makePlaces() {
    const points = await this.data.getListFromTypeAndIds(
      "place",
      this.distinctPlaceIds
    );
    this.set("distinctPlaces", points);
    this.theMap.points = points.map(point => {
      point.popup = `<h3>${point.name}</h3>`;
      return point;
    });
    this.theMap.addPoints();
  }
}
