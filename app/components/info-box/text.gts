import Component from "@glimmer/component";
import PlaceModel from "wandertext/models/place";
import ContributorModel from "wandertext/models/contributor";
import EntryModel from "wandertext/models/entry";
import TextModel from "wandertext/models/text";
import markdownToHtml from "ember-cli-showdown/components/markdown-to-html"

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
<template>
  <div class="h-full flex flex-row space-x-2 items-center" data-test-info-box-text>
    {{#if this.hasImg}}
      <img src={{this.imgSrc}} class="h-full w-auto" alt="cover of {{@item.name}}"/>
    {{/if}}

    {{#if this.hasMarkdownName}}
      <span class="truncate prose prose-p:text-3xl prose-p:truncate">
        {{markdownToHtml
          markdown=this.markdownName
        }}
      </span>
    {{else}}
      <span class="text-3xl truncate">
       {{@item.name}}
      </span>
    {{/if}}
  </div>
</template>
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    InfoBoxText: typeof InfoBoxTextComponent;
    "InfoBox::Text": typeof InfoBoxTextComponent;
    "info-box/text": typeof InfoBoxTextComponent;
  }
}
