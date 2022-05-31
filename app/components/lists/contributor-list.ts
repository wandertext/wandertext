import templateOnlyComponent from "@ember/component/template-only";
import ContributorModel from "wandertext/models/contributor";
import ArrayProxy from "@ember/array/proxy";

interface ListsContributorListComponentSignature {
  Args: {
    model: ArrayProxy<ContributorModel>;
  };
}

const ListsContributorListComponent =
  templateOnlyComponent<ListsContributorListComponentSignature>();

export default ListsContributorListComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Lists::ContributorList": typeof ListsContributorListComponent;
    "lists/contributor-list": typeof ListsContributorListComponent;
  }
}
