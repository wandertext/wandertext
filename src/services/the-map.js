import L from "leaflet";
import Service from "@ember/service";

export default class TheMapService extends Service {
  mapDiv = "the-map";

  map = {};

  points = [];

  pointsLayer = {};

  addPoints() {
    this.removePoints();
    const pointsLayer = L.layerGroup();
    this.points.forEach(point => {
      if (point.latitude && point.longitude) {
        L.circleMarker([point.latitude, point.longitude]).addTo(pointsLayer);
      }
    });
    this.set("pointsLayer", pointsLayer);
    this.get("pointsLayer").addTo(this.get("map"));
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

  removePoints() {
    this.get("map").removeLayer(this.get("pointsLayer"));
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
    if (this.get("points").length > 0) {
      this.addPoints();
    }
  }
}
