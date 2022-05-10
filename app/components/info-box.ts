import Component from "@glimmer/component";
import PlaceModel from "wandertext/models/place";
import ContributorModel from "wandertext/models/contributor";
import EntryModel from "wandertext/models/entry";
import TextModel from "wandertext/models/text";

interface InfoBoxComponentSignature {
  Element: HTMLDivElement;
  Args: {
    model: PlaceModel | ContributorModel | EntryModel | TextModel;
    linkToRoute?: string;
  };
  Blocks: {
    default: [];
  };
}

export default class InfoBoxComponent extends Component<InfoBoxComponentSignature> { }

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    InfoBox: typeof InfoBoxComponent;
  }
}
