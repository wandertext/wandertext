import templateOnlyComponent from "@ember/component/template-only";
import ContributorModel from "wandertext/models/contributor";
import ArrayProxy from "@ember/array/proxy";

interface ListContributorListComponentSignature {
  Args: {
    model: ArrayProxy<ContributorModel>;
  };
}

const ListContributorListComponent =
  templateOnlyComponent<ListContributorListComponentSignature>();

export default ListContributorListComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "List::ContributorList": typeof ListContributorListComponent;
    "list/contributor-list": typeof ListContributorListComponent;
  }
}
