import templateOnlyComponent from "@ember/component/template-only";

interface CloseButtonComponentSignature {
  Element: HTMLButtonElement;
  Args: {
    onClick: () => void;
    ariaLabel: string;
  };
}

const CloseButtonComponent =
  templateOnlyComponent<CloseButtonComponentSignature>();

export default CloseButtonComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    CloseButton: typeof CloseButtonComponent;
  }
}
