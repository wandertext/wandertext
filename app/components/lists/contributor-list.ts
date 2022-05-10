import Component from "@glimmer/component";
import ContributorModel from "wandertext/models/contributor";
import ArrayProxy from "@ember/array/proxy";

interface ListsContributorListComponentSignature {
  Args: {
    model: ArrayProxy<ContributorModel>;
  };
}

export default class ListsContributorListComponent extends Component<ListsContributorListComponentSignature> { }

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Lists::ContributorList": typeof ListsContributorListComponent;
    "lists/contributor-list": typeof ListsContributorListComponent;
  }
}
