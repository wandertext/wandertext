import templateOnlyComponent from "@ember/component/template-only";
import TextModel from "wandertext/models/text";
import ArrayProxy from "@ember/array/proxy";

interface ListTextListComponentSignature {
  Args: {
    model: ArrayProxy<TextModel>;
  };
}

const ListTextListComponent =
  templateOnlyComponent<ListTextListComponentSignature>();

export default ListTextListComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "List::TextList": typeof ListTextListComponent;
    "list/text-list": typeof ListTextListComponent;
  }
}
