import {TOC} from "@ember/component/template-only";
import { on } from "@ember/modifier";
import Icon from "./icon";

interface CloseButtonComponentSignature {
  Element: HTMLButtonElement;
  Args: {
    onClick: () => void;
    ariaLabel: string;
  };
}

const CloseButtonComponent: TOC<CloseButtonComponentSignature> =
<template>
  <button
    role="button"
    class="absolute p-4 pr-4 top-0 right-0"
    type="button"
    {{on "click" @onClick}}
    aria-label={{@ariaLabel}}
    >
    <Icon @icon="close" role="presentation" />
  </button>
</template>


export default CloseButtonComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    CloseButton: typeof CloseButtonComponent;
  }
}
