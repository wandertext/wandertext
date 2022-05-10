import Component from "@glimmer/component";

interface InfoBoxIconBoxComponentSignature {
  Blocks: {
    default: [];
  };
}

export default class InfoBoxIconBoxComponent extends Component<InfoBoxIconBoxComponentSignature> { }

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "InfoBox::IconBox": typeof InfoBoxIconBoxComponent;
    "info-box/icon-box": typeof InfoBoxIconBoxComponent;
  }
}
