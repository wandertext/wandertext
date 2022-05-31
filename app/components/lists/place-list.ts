import templateOnlyComponent from "@ember/component/template-only";
import PlaceModel from "wandertext/models/place";
import ArrayProxy from "@ember/array/proxy";

interface ListsPlaceListComponentSignature {
  Args: {
    model: ArrayProxy<PlaceModel>;
  };
}

const ListsPlaceListComponent =
  templateOnlyComponent<ListsPlaceListComponentSignature>();

export default ListsPlaceListComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Lists::PlaceList": typeof ListsPlaceListComponent;
    "lists/place-list": typeof ListsPlaceListComponent;
  }
}
