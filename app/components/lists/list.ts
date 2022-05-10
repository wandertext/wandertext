import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import Router from "@ember/routing/router";
import PlaceModel from "wandertext/models/place";
import ContributorModel from "wandertext/models/contributor";
import EntryModel from "wandertext/models/entry";
import TextModel from "wandertext/models/text";

interface ListsListComponentSignature {
  Args: {
    model: ArrayLike<PlaceModel | ContributorModel | EntryModel | TextModel>;
    linkToRoute: string;
  };
}

export default class ListsListComponent extends Component<ListsListComponentSignature> {
  @service declare router: Router;
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Lists::List": typeof ListsListComponent;
    "lists/list": typeof ListsListComponent;
  }
}
