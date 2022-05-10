import Component from "@glimmer/component";
import PlaceModel from "wandertext/models/place";
import ContributorModel from "wandertext/models/contributor";
import EntryModel from "wandertext/models/entry";
import TextModel from "wandertext/models/text";

interface InfoBoxTextComponentSignature {
  Args: {
    model: PlaceModel | ContributorModel | EntryModel | TextModel;
    linkToRoute?: string;
  };
}

export default class InfoBoxTextComponent extends Component<InfoBoxTextComponentSignature> {
  get hasMarkdownName() {
    return this.args.model instanceof TextModel && this.args.model.markdownName;
  }

  get hasImg() {
    return this.args.model instanceof TextModel && this.args.model.imgSrc;
  }

  get markdownName() {
    if (this.args.model instanceof TextModel && this.args.model.markdownName) {
      return this.args.model.markdownName;
    }

    return "";
  }

  get imgSrc() {
    if (this.args.model instanceof TextModel && this.args.model.imgSrc) {
      return this.args.model.imgSrc;
    }

    return "";
  }
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "InfoBox::Text": typeof InfoBoxTextComponent;
    "info-box/text": typeof InfoBoxTextComponent;
  }
}
