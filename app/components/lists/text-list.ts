import Component from "@glimmer/component";
import TextModel from "wandertext/models/text";

interface ListsTextListComponentSignature {
  Args: {
    model: ArrayLike<TextModel>;
  };
}

export default class ListsTextListComponent extends Component<ListsTextListComponentSignature> { }

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Lists::TextList": typeof ListsTextListComponent;
    "lists/text-list": typeof ListsTextListComponent;
  }
}
