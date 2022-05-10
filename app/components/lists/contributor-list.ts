import Component from "@glimmer/component";
import ContributorModel from "wandertext/models/contributor";

interface ListsContributorListComponentSignature {
  Args: {
    model: ArrayLike<ContributorModel>;
  };
}

export default class ListsContributorListComponent extends Component<ListsContributorListComponentSignature> { }

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Lists::ContributorList": typeof ListsContributorListComponent;
    "lists/contributor-list": typeof ListsContributorListComponent;
  }
}
