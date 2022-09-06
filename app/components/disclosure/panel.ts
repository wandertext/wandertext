import Component from "@glimmer/component";
import { action } from "@ember/object";

interface DisclosurePanelComponentSignature {
  Element: HTMLButtonElement;
  Args: {
    buttonGuid: string;
    panelGuid: string;
    isOpen: boolean;
    closePanel: () => void;
  };
  Blocks: {
    default: [];
  };
}

export default class DisclosurePanelComponent extends Component<DisclosurePanelComponentSignature> {
  @action onKeydown() {
    this.args.closePanel();
  }
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Disclosure::Panel": typeof DisclosurePanelComponent;
    "disclosure/panel": typeof DisclosurePanelComponent;
  }
}
