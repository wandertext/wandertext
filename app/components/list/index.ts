import Component from "@glimmer/component";
import { service } from "@ember/service";
import RouterService from "@ember/routing/router-service";
import ArrayProxy from "@ember/array/proxy";
import PlaceModel from "wandertext/models/place";
import ContributorModel from "wandertext/models/contributor";
import EntryModel from "wandertext/models/entry";
import TextModel from "wandertext/models/text";

interface ListComponentSignature {
  Element: HTMLUListElement;
  Args: {
    items: ArrayProxy<PlaceModel | ContributorModel | EntryModel | TextModel>;
    linkToRoute: string;
  };
}

export default class ListComponent extends Component<ListComponentSignature> {
  @service declare router: RouterService;
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    List: typeof ListComponent;
    list: typeof ListComponent;
  }
}
