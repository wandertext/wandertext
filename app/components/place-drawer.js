import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class PlaceDrawerComponent extends Component {
  @service placeDrawer;

  @service theMap;

  @tracked lat = 41;

  @tracked lng = -74;

  @tracked zoom = 10;

  @tracked markers = [
    {
      location: [40.807537, -73.96257],
      lat: 40.807537,
      lng: -73.96257,
      name: "Columbia"
    },
    {
      location: [40.729511, -73.99646],
      lat: 40.729511,
      lng: -73.99646,
      name: "NYU"
    }
  ];

  // @tracked visible = this.placeDrawer.visible;
  @tracked visible = true;
}
