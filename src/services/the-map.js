import L from "leaflet";
import Service from "@ember/service";

export default class TheMapService extends Service {
  mapDiv = "the-map";

  map = {};

  clearMap() {
    this.removeLayers();
    this.addTileLayer();
  }

  addPoints() {
    this.clearMap();
  }

  addZoomControl() {
    this.get("map").addControl(L.control.zoom({ position: "topright" }));
  }

  addTileLayer() {
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          "Tiles &copy; Esri &mdash; Source: US National Park Service",
        maxZoom: 8
      }
    ).addTo(this.get("map"));
  }

  removeLayers() {
    const map = this.get("map");
    map.eachLayer(layer => {
      map.removeLayer(layer);
    });
  }

  async createMap() {
    await this.set(
      "map",
      L.map(this.mapDiv, {
        center: [0, 0],
        zoom: 4,
        zoomControl: false
      })
    );
    this.addTileLayer();
    this.addZoomControl();
  }
}
