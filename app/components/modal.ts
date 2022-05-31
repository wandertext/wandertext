import templateOnlyComponent from "@ember/component/template-only";

interface ModalComponentSignature {
  Args: {
    header?: string;
    close: () => void;
  };
  Blocks: {
    default: [];
  };
}

const ModalComponent = templateOnlyComponent<ModalComponentSignature>();

export default ModalComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    Modal: typeof ModalComponent;
  }
}
