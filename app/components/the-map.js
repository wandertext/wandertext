import L from "leaflet";
import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { set } from "@ember/object";

export default class TheMapComponent extends Component {
  @service theMap;

  divId = "the-map";

  didInsertElement() {
    set(
      this.theMap,
      "map",
      L.map(this.divId, {
        center: [0, 0],
        minZoom: 2,
        maxZoom: 19,
        zoom: 4,
        zoomControl: false
      })
    );
    this.theMap._initTileLayers();
    this.theMap.map.on("zoomend", () => {
      this.theMap._showTileLayer();
    });
    this.theMap._showTileLayer();
  }
}
