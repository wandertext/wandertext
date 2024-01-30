import {TOC} from "@ember/component/template-only";

interface InfoBoxIconBoxComponentSignature {
  Blocks: {
    default: [];
  };
}

const InfoBoxIconBoxComponent :
  TOC<InfoBoxIconBoxComponentSignature> =
  <template>
    <div class="flex flex-row justify-center items-center space-x-1" data-test-info-box-icon-box>
      {{yield}}
    </div>
  </template>

export default InfoBoxIconBoxComponent;

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    InfoBoxIconBox: typeof InfoBoxIconBoxComponent;
    "InfoBox::IconBox": typeof InfoBoxIconBoxComponent;
    "info-box/icon-box": typeof InfoBoxIconBoxComponent;
  }
}
