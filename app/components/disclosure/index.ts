import Component from "@glimmer/component";
import DisclosureButtonComponent from "./button";
import DisclosurePanelComponent from "./panel";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";

interface DisclosureComponentBlock {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  Button: typeof DisclosureButtonComponent;
  Panel: typeof DisclosurePanelComponent;
}

interface DisclosureComponentSignature {
  Element: HTMLElement;
  Args: {};
  Blocks: {
    default: [disclosure: DisclosureComponentBlock];
  };
}

export default class DisclosureComponent extends Component<DisclosureComponentSignature> {
  guid = `${guidFor(this)}-headlessui-disclosure`;
  @tracked isOpen = false;

  @action
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  @action
  open() {
    this.isOpen = true;
  }

  @action
  close() {
    this.isOpen = false;
  }

  get panelGuid() {
    return `${this.guid}-panel`;
  }

  get panelElement() {
    return document.getElementById(this.panelGuid);
  }

  get buttonGuid() {
    return `${this.guid}-button`;
  }

  get buttonElement() {
    return document.getElementById(this.buttonGuid);
  }
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    Disclosure: typeof DisclosureComponent;
  }
}
