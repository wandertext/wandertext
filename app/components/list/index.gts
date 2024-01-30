import Component from "@glimmer/component";
import { service } from "@ember/service";
import RouterService from "@ember/routing/router-service";
import ArrayProxy from "@ember/array/proxy";
import PlaceModel from "wandertext/models/place";
import ContributorModel from "wandertext/models/contributor";
import EntryModel from "wandertext/models/entry";
import TextModel from "wandertext/models/text";
import { eq } from "ember-truth-helpers";
import ListItem from "./item";

interface ListComponentSignature {
  Element: HTMLUListElement;
  Args: {
    items: ArrayProxy<PlaceModel | ContributorModel | EntryModel | TextModel>;
    linkToRoute: string;
  };
}

export default class ListComponent extends Component<ListComponentSignature> {
  @service declare router: RouterService;

  <template>
    <ul class="flex flex-col
      divide-y-2
      divide-primaryDark
      {{if (eq this.router.currentRouteName "texts.text") "transform -translate-x-full md:translate-x-0 md:w-1/4 w-full" "w-full"}}"
    ...attributes >
      {{#each @items as |item|}}
        <ListItem @item={{item}} @linkToRoute={{@linkToRoute}} />
      {{/each}}
    </ul>
  </template>
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    List: typeof ListComponent;
    list: typeof ListComponent;
  }
}
