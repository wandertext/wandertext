import templateOnlyComponent from "@ember/component/template-only";
import TextModel from "wandertext/models/text";
import ArrayProxy from "@ember/array/proxy";

interface ListsTextListComponentSignature {
  Args: {
    model: ArrayProxy<TextModel>;
  };
}

const ListsTextListComponent =
  templateOnlyComponent<ListsTextListComponentSignature>();

export default ListsTextListComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Lists::TextList": typeof ListsTextListComponent;
    "lists/text-list": typeof ListsTextListComponent;
  }
}
