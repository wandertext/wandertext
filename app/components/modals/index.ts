import templateOnlyComponent from "@ember/component/template-only";

interface ModalsIndexComponentSignature {
  Args: {
    close: () => void;
  };
}
const ModalsIndexComponent =
  templateOnlyComponent<ModalsIndexComponentSignature>();

export default ModalsIndexComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "Modals::Index": typeof ModalsIndexComponent;
    "modals/index": typeof ModalsIndexComponent;
  }
}
