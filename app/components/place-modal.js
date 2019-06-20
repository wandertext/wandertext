import Component from "@glimmer/component";

export default class PlaceModalComponent extends Component {
  zoom = 8;

  lat = this.args.place.latitude;

  lng = this.args.place.longitude;

  name = this.args.place.name;
}
