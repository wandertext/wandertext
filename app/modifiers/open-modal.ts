import Modifier from "ember-modifier";
import { service } from "@ember/service";
import type Modals from "ember-promise-modals";

export interface OpenModalModifierSignature {
  Element: HTMLDivElement;
  Args: {
    Positional: [modalContent?: string];
  };
}

export default class OpenModalModifier extends Modifier<OpenModalModifierSignature> {
  @service declare modals: Modals;

  modify(_element: HTMLElement, [modalContent]: [string]) {
    if (modalContent) {
      this.modals.open(`modals/${modalContent}`);
    }
  }
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "open-modal": typeof OpenModalModifier;
  }
}
