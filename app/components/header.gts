import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import type MenuState from "wandertext/services/menu-state";
import { IconSlug } from "wandertext";
import RouterService from "@ember/routing/router-service";
import { on } from "@ember/modifier";
import { eq } from "ember-truth-helpers";
import Nav from "./nav";
import Icon from "./icon";

interface HeaderComponentSignature {
  Element: HTMLElement;
  Args: {
    icon: IconSlug;
    title: string;
  };
}

export default class HeaderComponent extends Component<HeaderComponentSignature> {
  @service declare router: RouterService;

  @service declare menuState: MenuState;

  get route(): string {
    return this.router.currentRouteName;
  }

  get icon(): IconSlug {
    if (this.args.icon) {
      return this.args.icon;
    }

    return "logo";
  }

  get title() {
    if (this.args.title) {
      return this.args.title;
    }

    return "Wandertext";
  }

  @action handleMenuClick() {
    this.menuState.menuVisible = true;
  }

  @action goBack() {
    window.history.back();
  }

<template>
  <header class="shadow-md h-12 p-3 flex flex-row justify-between sticky top-0 bg-columbiaBlue w-full
    z-above-leaflet">
    {{#unless (eq this.route "index")}}
      <button
        data-test-back-button
        {{on "click" this.goBack}}
        type="button"
        >
        <Icon @icon="caret-left" @role="button"/>
      </button>
    {{/unless}}

    <div data-test-header-center>
      <h1 class="sr-only">{{this.title}}</h1>
      <Icon @icon={{this.icon}} />
    </div>

    <Nav />
  </header>
</template>
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    Header: typeof HeaderComponent;
  }
}

