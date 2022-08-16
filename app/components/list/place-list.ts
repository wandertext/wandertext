import templateOnlyComponent from "@ember/component/template-only";
import PlaceModel from "wandertext/models/place";
import ArrayProxy from "@ember/array/proxy";

interface ListPlaceListComponentSignature {
  Args: {
    model: ArrayProxy<PlaceModel>;
  };
}

const ListPlaceListComponent =
  templateOnlyComponent<ListPlaceListComponentSignature>();

export default ListPlaceListComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "List::PlaceList": typeof ListPlaceListComponent;
    "list/place-list": typeof ListPlaceListComponent;
  }
}
