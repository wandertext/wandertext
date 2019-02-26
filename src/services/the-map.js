import L from "leaflet";
import Service from "@ember/service";

export default class TheMapService extends Service {
  mapDiv = "the-map";

  map = {};

  points = [];

  pointsLayer = {};

  iconUrl =
    "<svg height=20 width=20 xmlns='http://www.w3.org/2000/svg'><path class='dot-marker' d='M0,29L26,0l1.8,1.1c7.4,8.6,16.4,17,26.9,25.3c-5.4,6.2-14,15.1-25.8,26.5c-4.3-0.7-8.7-3.1-13.3-7.2 c-4.5-4.1-8.8-8.1-12.7-12L0,29z' transform='scale(0.32)' /></svg>";

  addPoints(opts = { padding: true }) {
    this.removePoints();
    const pointsLayer = L.featureGroup();
    const icon = L.divIcon({ html: this.iconUrl, iconSize: [20, 20] });
    this.points.forEach(point => {
      if (point.latitude && point.longitude) {
        const marker = L.marker([point.latitude, point.longitude], { icon });
        if (point.popup) {
          marker.bindPopup(point.popup);
        }

        marker.addTo(pointsLayer);
      }
    });
    this.set("pointsLayer", pointsLayer);
    this.get("pointsLayer").addTo(this.get("map"));
    this._recenterMap(opts.padding);
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
        minZoom: 2,
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

  _recenterMap(padding) {
    const paddingTopLeft = [0, 0];
    if (padding && !L.Browser.mobile) {
      paddingTopLeft[0] = 0.5 * window.innerWidth;
    }

    this.map.fitBounds(this.pointsLayer.getBounds(), { paddingTopLeft });
  }
}
