import Component from "@glimmer/component";
import PlaceModel from "wandertext/models/place";
import ContributorModel from "wandertext/models/contributor";
import EntryModel from "wandertext/models/entry";
import TextModel from "wandertext/models/text";

interface ItemComponentSignature {
  Args: {
    model: PlaceModel | ContributorModel | EntryModel | TextModel;
  };
}

export default class ItemComponent extends Component<ItemComponentSignature> {
  get hasBlurb() {
    if (this.args.model instanceof TextModel) {
      return true;
    }

    return false;
  }

  get markdownBlurb() {
    if (this.args.model instanceof TextModel && this.args.model.markdownBlurb) {
      return this.args.model.markdownBlurb;
    }

    return "";
  }
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    Item: typeof ItemComponent;
  }
}
