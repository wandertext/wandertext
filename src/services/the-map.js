import L from "leaflet";
import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class TheMapService extends Service {
  constructor(...args) {
    super(...args);
    this.activePlaceId = null;
  }

  @tracked activePlaceId;

  points = [];

  pointsLayer = {};

  politicalTileLayer = {};

  physicalTileLayer = {};

  iconUrl =
    "<svg height=20 width=20 xmlns='http://www.w3.org/2000/svg'><path class='dot-marker' d='M0,29L26,0l1.8,1.1c7.4,8.6,16.4,17,26.9,25.3c-5.4,6.2-14,15.1-25.8,26.5c-4.3-0.7-8.7-3.1-13.3-7.2 c-4.5-4.1-8.8-8.1-12.7-12L0,29z' transform='scale(0.32)' /></svg>";

  addPoints(points = this.points, opts = { padding: true }) {
    this.removePoints();
    const pointsLayer = L.featureGroup();
    const icon = L.divIcon({ html: this.iconUrl, iconSize: [20, 20] });
    points.forEach(point => {
      if (point.latitude && point.longitude) {
        const marker = L.marker([point.latitude, point.longitude], {
          riseOnHover: true,
          id: point.id,
          icon
        });
        if (point.tooltip) {
          marker.bindTooltip(point.tooltip);
        }

        marker.on("click", e => {
          document
            .querySelectorAll(".dot-marker")
            .forEach(dot => dot.classList.remove("selected-dot"));
          this.activePlaceId = e.target.options.id;
          e.originalEvent.srcElement.classList.add("selected-dot");
        });
        marker.addTo(pointsLayer);
      }
    });
    this.pointsLayer = pointsLayer;
    this.pointsLayer.addTo(this.map);
    this._recenterMap(opts.padding);
  }

  removePoints() {
    this.map.removeLayer(this.pointsLayer);
  }

  _recenterMap(padding) {
    const paddingTopLeft = [0, 0];
    if (padding && !L.Browser.mobile) {
      paddingTopLeft[0] = 0.5 * window.innerWidth;
    }

    this.map.fitBounds(this.pointsLayer.getBounds(), { paddingTopLeft });
  }

  _showTileLayer() {
    if (this.map.getZoom() < 8) {
      if (this.map.hasLayer(this.politicalTileLayer)) {
        this.map.removeLayer(this.politicalTileLayer);
      }

      if (!this.map.hasLayer(this.physicalTileLayer)) {
        this.physicalTileLayer.addTo(this.map);
      }
    } else {
      if (this.map.hasLayer(this.physicalTileLayer)) {
        this.map.removeLayer(this.physicalTileLayer);
      }

      if (!this.map.hasLayer(this.politcalTileLayer)) {
        this.politicalTileLayer.addTo(this.map);
      }
    }
  }

  _initTileLayers() {
    this.physicalTileLayer = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          "Tiles &copy; Esri &mdash; Source: US National Park Service",
        maxZoom: 8
      }
    );
    this.politicalTileLayer = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        minZoom: 7,
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    );
  }
}
