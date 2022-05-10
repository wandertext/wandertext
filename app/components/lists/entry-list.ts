import Component from "@glimmer/component";
import EntryModel from "wandertext/models/entry";

interface ListsEntryListComponentSignature {
  Args: {
    model: ArrayLike<EntryModel>;
  };
}

export default class ListsEntryListComponent extends Component<ListsEntryListComponentSignature> { }

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Lists::EntryList": typeof ListsEntryListComponent;
    "lists/entry-list": typeof ListsEntryListComponent;
  }
}
