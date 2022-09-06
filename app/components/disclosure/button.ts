import Component from "@glimmer/component";

import { action } from "@ember/object";

import { Keys } from "ember-headlessui/utils/keyboard";

interface DisclosureButtonComponentSignature {
  Element: HTMLButtonElement;
  Args: {
    isOpen: boolean;
    buttonGuid: string;
    panelGuid: string;
    togglePanel: () => void;
    openPanel: () => void;
    closePanel: () => void;
  };
  Blocks: {
    default: [];
  };
}

interface DisclosureButtonEventTarget extends EventTarget {
  disabled: boolean;
}

interface DisclosureButtonKeyboardEvent extends KeyboardEvent {
  target: DisclosureButtonEventTarget;
}

export default class DisclosureButtonComponent extends Component<DisclosureButtonComponentSignature> {
  @action
  onKeydown(event: DisclosureButtonKeyboardEvent) {
    if (event.target.disabled) return;
    switch (event.key) {
      case Keys.Space:
      case Keys.Enter:
      case Keys.ArrowDown:
        event.preventDefault();
        event.stopPropagation();

        if (this.args.isOpen && event.key === Keys.Enter) {
          this.args.closePanel();
        } else {
          this.args.openPanel();
        }
        break;
      case Keys.ArrowUp:
        event.preventDefault();
        event.stopPropagation();
        this.args.openPanel();
        break;
    }
  }
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Disclosure::Button": typeof DisclosureButtonComponent;
    "disclosure/button": typeof DisclosureButtonComponent;
  }
}
