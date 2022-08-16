import templateOnlyComponent from "@ember/component/template-only";
import EntryModel from "wandertext/models/entry";
import ArrayProxy from "@ember/array/proxy";

interface ListEntryListComponentSignature {
  Args: {
    model: ArrayProxy<EntryModel>;
  };
}

const ListEntryListComponent =
  templateOnlyComponent<ListEntryListComponentSignature>();

export default ListEntryListComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "List::EntryList": typeof ListEntryListComponent;
    "list/entry-list": typeof ListEntryListComponent;
  }
}
