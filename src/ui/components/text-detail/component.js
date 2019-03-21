import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
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

  @tracked entries;

  @tracked entriesCount;

  @tracked expanded;

  @tracked docs;

  @tracked distinctPlaces;

  @tracked distinctPlacesCount;

  @tracked placeIds;

  @tracked contributors;

  @tracked contributorsSentence = null;

  @tracked contributorsEtAl = null;

  @tracked text;

  constructor(...args) {
    super(...args);
    this.getData();
    if (this.args.slug === "lcaaj") {
      this.card.logo = this.card.vov;
    } else {
      this.card.logo = this.card.waw;
    }

    this.distinctPlacesCount = null;
    this.expanded = {
      overview: true,
      contributors: false,
      entries: false,
      places: false
    };
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
    this.contributors = contributors;
    this._setContributorsSentence(contributors);
  }

  @tracked distinctPlaceIds = _uniq(this.placeIds);

  async getData() {
    try {
      this.docs = await this.data.getAll();
      this.text = this.docs.filter(d => d.slug === this.args.slug)[0];
      this.card.setTitle(this.text);
      this.entries = this.docs.filter(
        d => d.type === "entry" && d.text === this.text.id
      );
      this.entriesCount = this.entries.length;
      this.placeIds = this.entries.map(entry => entry.place);
      this._makePlaces();
      return this.getContributors();
    } catch (error) {
      return error;
    }
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
      this.distinctPlaces = points;
      this.distinctPlacesCount = points.length;
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
