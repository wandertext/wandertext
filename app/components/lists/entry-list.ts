import templateOnlyComponent from "@ember/component/template-only";
import EntryModel from "wandertext/models/entry";
import ArrayProxy from "@ember/array/proxy";

interface ListsEntryListComponentSignature {
  Args: {
    model: ArrayProxy<EntryModel>;
  };
}

const ListsEntryListComponent =
  templateOnlyComponent<ListsEntryListComponentSignature>();

export default ListsEntryListComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Lists::EntryList": typeof ListsEntryListComponent;
    "lists/entry-list": typeof ListsEntryListComponent;
  }
}
