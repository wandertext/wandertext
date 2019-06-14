import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { set } from "@ember/object";
import L from "leaflet";

export default class ModalMapComponent extends Component {
  @service theMap;

  positionalParams = ["centerLat", "centerLng", "zoom"];

  modalMap = null;

  didInsertElement() {
    set(
      this.theMap,
      "map",
      L.map("modal-map", {
        center: [this.centerLat, this.centerLng],
        minZoom: 2,
        maxZoom: 19,
        zoom: this.zoom,
        zoomControl: false
      })
    );
    this.theMap._initTileLayers();
    this.theMap.map.on("zoomend", () => {
      this.theMap._showTileLayer();
    });
    this.theMap._showTileLayer();
    this.theMap.addPoints(
      [{ latitude: this.centerLat, longitude: this.centerLng }],
      { recenter: false, padding: false }
    );
  }
}
