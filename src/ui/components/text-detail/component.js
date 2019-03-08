import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import _intersectionBy from "lodash/intersectionBy";
import _countBy from "lodash/countBy";
import _sortBy from "lodash/sortBy";
import _uniqBy from "lodash/uniqBy";
import _uniq from "lodash/uniq";
import { compile } from "handlebars/dist/handlebars";

export default class TextDetailComponent extends Component {
  @service data;

  @service theMap;

  @service logo;

  @service card;

  @tracked docs = [];

  @tracked distinctPlaces = [];

  @tracked entries = [];

  @tracked placeIds = [];

  @tracked contributors = [];

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

  @tracked distinctPlaceIds = _uniq(this.placeIds);

  didInsertElement() {
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
        this.set("placeIds", this.entries.map(entry => entry.place));
        if (this.slug === "lcaaj") {
          this.set("logo.svg", "vov.svg");
        } else {
          this.set("logo.svg", "waw.svg");
        }
      })
      .then(() => {
        this._makePlaces();
        return this.getContributors();
      });
  }

  _makePlaces() {
    const popup = `<h3>{{point.attestedName}}<br /><small class='muted'>{{point.name}}</small></h3>
    <div class="histogram-container">
      <EntriesHistogram @xAxis={{text.xValues}} @x={{point.entriesXs}} />
    <ul>
      <li>{{point.entryCount}} entries</li>
      {{#if point.geonameId}}
        <li>GeonameId: {{point.geonameId}}</li>
      {{/if}}
    </ul>
    `;
    // Const popup = this.text.popupTemplate || "<h3>{{point.name}}</h3>";
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
        point.popup = compile(popup)({ point, text: this.text });
        return point;
      });
      this.theMap.addPoints();
    } else {
      this.theMap.removePoints();
    }
  }
}
