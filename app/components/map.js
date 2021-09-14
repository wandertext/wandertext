import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class MapComponent extends Component {
  lat = 40.712_778;

  lng = -74.006_111;

  @tracked
  zoom = 8;

  tiles = {
    esriPhysical: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}",
      attribution: "Tiles &copy;Esri &mdash; Source: US National Park Service",
    },
    alidadeSmooth: {
      url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
      attribution:
        "&copy;<a href='https://stadiamaps.com/'>Stadia Maps</a>, &copy;<a href='https://openmaptiles.org/'>OpenMapTiles</a> &copy;<a href='http://openstreetmap.org'>OpenStreetMap</a> contributors",
    },
  };

  @service modals;

  @action openDefaultModal(content) {
    this.modals.open(`modals/${content}`);
  }

  @action updateZoom(event) {
    // Seems to set up a race condition where the attribution is not always as
    // tidy as it should be.
    this.zoom = event.target.getZoom();
    const esri = this.tiles.esriPhysical.attribution;
    const stadia = this.tiles.alidadeSmooth.attribution;
    if (this.zoom <= 8) {
      event.target.attributionControl.removeAttribution(stadia);
      event.target.attributionControl.addAttribution(esri);
    } else {
      event.target.attributionControl.removeAttribution(esri);
      event.target.attributionControl.addAttribution(stadia);
    }
  }

  @action placeAttribution(event) {
    event.target.attributionControl.setPosition("bottomleft");
  }
}
