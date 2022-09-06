import Component from "@glimmer/component";
import PlaceModel from "wandertext/models/place";
import ContributorModel from "wandertext/models/contributor";
import EntryModel from "wandertext/models/entry";
import TextModel from "wandertext/models/text";

interface InfoBoxTextComponentSignature {
  Element: HTMLElement;
  Args: {
    item: PlaceModel | ContributorModel | EntryModel | TextModel;
    linkToRoute?: string;
  };
}

export default class InfoBoxTextComponent extends Component<InfoBoxTextComponentSignature> {
  get hasMarkdownName() {
    return this.args.item instanceof TextModel && this.args.item.markdownName;
  }

  get hasImg() {
    return this.args.item instanceof TextModel && this.args.item.imgSrc;
  }

  get markdownName() {
    if (this.args.item instanceof TextModel && this.args.item.markdownName) {
      return this.args.item.markdownName;
    }

    return "";
  }

  get imgSrc() {
    if (this.args.item instanceof TextModel && this.args.item.imgSrc) {
      return this.args.item.imgSrc;
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
