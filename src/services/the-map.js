import L from "leaflet";
import Service from "@ember/service";

export default class TheMapService extends Service {
  mapDiv = "the-map";

  map = {};

  points = [];

  pointsLayer = {};

  addPoints() {
    this.removePoints();
    const pointsLayer = L.featureGroup();
    this.points.forEach(point => {
      if (point.latitude && point.longitude) {
        const marker = L.circleMarker([point.latitude, point.longitude]);
        if (point.popup) {
          marker.bindPopup(point.popup);
        }

        marker.addTo(pointsLayer);
      }
    });
    this.set("pointsLayer", pointsLayer);
    this.get("pointsLayer").addTo(this.get("map"));
    this._recenterMap();
  }

  addZoomControl() {
    if (!L.Browser.mobile) {
      this.get("map").addControl(L.control.zoom({ position: "topright" }));
    }
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

  _recenterMap() {
    const paddingTopLeft = [0, 0];
    if (!L.Browser.mobile) {
      paddingTopLeft[0] = 0.5 * window.innerWidth;
    }

    this.map.fitBounds(this.pointsLayer.getBounds(), { paddingTopLeft });
  }
}
