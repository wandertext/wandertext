import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import type Modals from "ember-promise-modals";
import { Marker } from "wandertext";

export interface MapComponentSignature {
  Element: HTMLDivElement;
  Args: {
    markers?: Marker[];
    fullScreen?: boolean;
    defaultModalOpen?: boolean;
    modalContentComponent?: string;
  };
}

export default class MapComponent extends Component<MapComponentSignature> {
  lat = 40.712_778;

  lng = -74.006_111;

  @service declare modals: Modals;

  @action openDefaultModal(content: string) {
    this.modals.open(`modals/${content}`);
  }
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    Map: typeof MapComponent;
  }
}
