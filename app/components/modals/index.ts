import Component from "@glimmer/component";

interface ModalsIndexComponentSignature {
  Args: {
    close: () => void;
  };
}

export default class ModalsIndexComponent extends Component<ModalsIndexComponentSignature> {}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Modals::Index": typeof ModalsIndexComponent;
    "modals/index": typeof ModalsIndexComponent;
  }
}
