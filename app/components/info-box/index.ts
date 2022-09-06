import templateOnlyComponent from "@ember/component/template-only";
import PlaceModel from "wandertext/models/place";
import ContributorModel from "wandertext/models/contributor";
import EntryModel from "wandertext/models/entry";
import TextModel from "wandertext/models/text";

interface InfoBoxComponentSignature {
  Element: HTMLDivElement;
  Args: {
    item: PlaceModel | ContributorModel | EntryModel | TextModel;
    linkToRoute?: string;
  };
  Blocks: {
    default: [];
  };
}

const InfoBoxComponent = templateOnlyComponent<InfoBoxComponentSignature>();

export default InfoBoxComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    InfoBox: typeof InfoBoxComponent;
  }
}
