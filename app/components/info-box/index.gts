import { TOC } from "@ember/component/template-only";
import PlaceModel from "wandertext/models/place";
import ContributorModel from "wandertext/models/contributor";
import EntryModel from "wandertext/models/entry";
import TextModel from "wandertext/models/text";
import { LinkTo } from '@ember/routing';
import InfoBoxText from "./text";

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

const InfoBoxComponent: TOC<InfoBoxComponentSignature> =
  <template>
    <div class="h-16 p-2 pr-6 max-w-full w-full flex flex-row space-x-2 justify-between" ...attributes data-test-info-box>
      {{#if @linkToRoute}}
        <LinkTo class="overflow-hidden" @route={{@linkToRoute}} @model={{@item.id}}>
          <InfoBoxText @item={{@item}}/>
        </LinkTo>
      {{else}}
        <InfoBoxText @item={{@item}}/>
      {{/if}}
        {{yield}}
    </div>
  </template>

export default InfoBoxComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    InfoBox: typeof InfoBoxComponent;
  }
}

