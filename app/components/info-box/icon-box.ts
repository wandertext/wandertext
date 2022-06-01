import templateOnlyComponent from "@ember/component/template-only";

interface InfoBoxIconBoxComponentSignature {
  Blocks: {
    default: [];
  };
}

const InfoBoxIconBoxComponent =
  templateOnlyComponent<InfoBoxIconBoxComponentSignature>();

export default InfoBoxIconBoxComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "InfoBox::IconBox": typeof InfoBoxIconBoxComponent;
    "info-box/icon-box": typeof InfoBoxIconBoxComponent;
  }
}
