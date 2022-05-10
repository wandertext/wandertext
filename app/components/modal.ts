import Component from "@glimmer/component";

interface ModalComponentSignature {
  Args: {
    header?: string;
    close: () => void;
  };
  Blocks: {
    default: [];
  };
}

export default class ModalComponent extends Component<ModalComponentSignature> { }

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    Modal: typeof ModalComponent;
  }
}
