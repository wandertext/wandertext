import Component from "@glimmer/component";

export default class PlaceModalComponent extends Component {
  zoom = 8;

  lat = this.args.place.geometry.coordinates[1];

  lng = this.args.place.geometry.coordinates[0];

  name = this.args.place.properties.name;
}
