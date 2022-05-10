import Component from "@glimmer/component";
import PlaceModel from "wandertext/models/place";
import ArrayProxy from "@ember/array/proxy";

interface ListsPlaceListComponentSignature {
  Args: {
    model: ArrayProxy<PlaceModel>;
  };
}

export default class ListsPlaceListComponent extends Component<ListsPlaceListComponentSignature> { }

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Lists::PlaceList": typeof ListsPlaceListComponent;
    "lists/place-list": typeof ListsPlaceListComponent;
  }
}
