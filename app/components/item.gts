import Component from "@glimmer/component";
import markdownToHtml from "ember-cli-showdown/components/markdown-to-html"
import PlaceModel from "wandertext/models/place";
import ContributorModel from "wandertext/models/contributor";
import EntryModel from "wandertext/models/entry";
import TextModel from "wandertext/models/text";
import InfoBox from "./info-box";
import InfoBoxIconBox from "./info-box/icon-box";
import Icon from "./icon";

interface ItemComponentSignature {
  Args: {
    model: PlaceModel | ContributorModel | EntryModel | TextModel;
  };
}

export default class ItemComponent extends Component<ItemComponentSignature> {
  get markdownBlurb(): string | false {
    if (this.args.model instanceof TextModel && this.args.model.markdownBlurb) {
      return this.args.model.markdownBlurb;
    }

    return false;
  }
  <template>
  <article class="md:bg-white h-full">
    <header>
      <InfoBox @model={{@item}}>
        <InfoBoxIconBox>
          <button type="button">
            <Icon @role="button" @icon="map"/>
          </button>
            <Icon @icon="caret-right" />
        </InfoBoxIconBox>
      </InfoBox>
    </header>

    {{#if this.markdownBlurb}}
      <section class="text-xl px-2" data-test-markdown-blurb>
        {{markdownToHtml this.markdownBlurb}}
      </section>
    {{/if}}

    <section class="px-2">
      <h2 class="text-2xl font-semibold"><Icon @icon="contributors" /> Contributors</h2>
    </section>
    <section>
      <h2 class="text-2xl font-semibold"><Icon @icon="stats" /> Statistics</h2>
    </section>
  </article>
  </template>
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    Item: typeof ItemComponent;
  }
}
