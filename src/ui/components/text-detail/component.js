import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { set } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import _intersectionBy from "lodash/intersectionBy";
import _countBy from "lodash/countBy";
import _sortBy from "lodash/sortBy";
import _uniqBy from "lodash/uniqBy";
import _uniq from "lodash/uniq";

export default class TextDetailComponent extends Component {
  @service data;

  @service theMap;

  @service card;

  @tracked activePlaceId;

  @tracked expanded;

  @tracked docs = [];

  @tracked distinctPlaces = [];

  @tracked entries = [];

  @tracked placeIds = [];

  @tracked contributorsSentence = null;

  @tracked contributorsEtAl = null;

  constructor(...args) {
    super(...args);
    set(this, "distinctPlacesCount", null);
    set(this, "entriesCount", null);
    this.expanded = {
      overview: true,
      contributors: false,
      entries: false,
      places: false
    };
    console.log("in constructor", this.expanded.entries);
    this.activePlaceId = this.theMap.activePlaceId;
  }

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
    this._setContributorsSentence(contributors);
  }

  @tracked distinctPlaceIds = _uniq(this.placeIds);

  didInsertElement() {
    if (this.slug === "lcaaj") {
      this.set("card.logo", this.card.vov);
    } else {
      this.set("card.logo", this.card.waw);
    }

    return this.data
      .getAll()
      .then(docs => {
        this.set("docs", docs);
        this.set("text", this.docs.filter(d => d.slug === this.slug)[0]);
        this.card.setTitle(this.text);
        this.set(
          "entries",
          this.docs.filter(d => d.type === "entry" && d.text === this.text.id)
        );
        this.set("entriesCount", this.entries.length);
        this.set("placeIds", this.entries.map(entry => entry.place));
      })
      .then(() => {
        this._makePlaces();
        return this.getContributors();
      });
  }

  _makePlaces() {
    const sortKey = this.text.entrySort || "page";
    this.text.xValues = _uniqBy(this.entries, sortKey).map(
      entry => entry[sortKey]
    );
    const points = _intersectionBy(
      this.docs,
      this.distinctPlaceIds.map(id => {
        return { id };
      }),
      "id"
    );
    if (points.length > 0) {
      this.set("distinctPlaces", points);
      this.set("distinctPlacesCount", points.length);
      this.theMap.points = points.map(point => {
        const theEntries = this.entries.filter(
          entry => entry.place === point.id
        );
        point.entryCount = theEntries.length;
        point.entriesXs = theEntries.map(entry => entry[sortKey]);
        const names = _countBy(theEntries, "placeInText");
        const attestedNames = Object.keys(names).map(key => ({
          name: key,
          count: names[key]
        }));
        point.attestedName = _sortBy(attestedNames, "count")[
          attestedNames.length - 1
        ].name;
        point.tooltip = point.attestedName;
        return point;
      });
      this.theMap.addPoints();
    } else {
      this.theMap.removePoints();
    }
  }

  _setContributorsSentence(contributors) {
    const namesArray = _sortBy(
      contributors.map(user => {
        user.count *= -1;
        return user;
      }),
      ["count", "lastname"]
    ).map((user, i) => {
      let name;
      if (i === 0) {
        name = `${user.lastname}, ${user.firstname}`;
      } else if (i === contributors.length - 1) {
        name = `and ${user.firstname} ${user.lastname}`;
      } else {
        name = `${user.firstname} ${user.lastname}`;
      }

      return name;
    });
    this.contributorsSentence = namesArray.join(", ");
    if (namesArray.length > 3) {
      this.contributorsEtAl = namesArray[0].split(",")[0] + " et al.";
    } else {
      this.contributorsEtAl = this.contributorsSentence;
    }
  }
}
