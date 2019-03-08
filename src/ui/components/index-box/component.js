import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default class IndexBoxComponent extends Component {
  @service data;

  @service theMap;

  @service logo;

  didInsertElement() {
    this.set("logo.svg", "waw.svg");
    return this.data.getAll().then(docs => {
      this.theMap.points = docs
        .filter(doc => doc.type === "place")
        .map(place => {
          place.popup = `<h3>${place.name}</h3>`;
          return place;
        });
      this.theMap.addPoints({ padding: false });
    });
  }
}
