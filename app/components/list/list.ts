import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import RouterService from "@ember/routing/router-service";
import ArrayProxy from "@ember/array/proxy";
import PlaceModel from "wandertext/models/place";
import ContributorModel from "wandertext/models/contributor";
import EntryModel from "wandertext/models/entry";
import TextModel from "wandertext/models/text";

interface ListListComponentSignature {
  Args: {
    model: ArrayProxy<PlaceModel | ContributorModel | EntryModel | TextModel>;
    linkToRoute: string;
  };
}

export default class ListListComponent extends Component<ListListComponentSignature> {
  @service declare router: RouterService;
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "List::List": typeof ListListComponent;
    "list/list": typeof ListListComponent;
  }
}
