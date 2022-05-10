import Component from "@glimmer/component";

interface CloseButtonComponentSignature {
  Element: HTMLButtonElement;
  Args: {
    onClick: () => void;
    ariaLabel: string;
  };
}

export default class CloseButtonComponent extends Component<CloseButtonComponentSignature> { }

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    CloseButton: typeof CloseButtonComponent;
  }
}
