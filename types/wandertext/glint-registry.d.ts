import "@glint/environment-ember-loose";
import "@glint/environment-ember-loose/native-integration";
import { ComponentLike } from "@glint/template";
import { LeafletEvent } from "leaflet";
import { ensureSafeComponent } from "@embroider/util";
import "ember-css-transitions/glint";
import "ember-svg-jar/glint";
import "ember-page-title/glint";
import EqHelper from "@gavant/glint-template-types/types/ember-truth-helpers/eq";
import LteHelper from "@gavant/glint-template-types/types/ember-truth-helpers/lte";
import MarkdownToHtml from "@gavant/glint-template-types/types/ember-cli-showdown/markdown-to-html";
import SvgJarHelper from "@gavant/glint-template-types/types/ember-svg-jar/svg-jar";
import { WandertextLeafletEvent } from "wandertext";
import { PopperJS } from "ember-popperjs";

export interface EmberLeafletLayers {
  tile: ComponentLike<{
    Args: {
      url: string;
    };
  }>;
  marker: ComponentLike<{
    Args: {
      lat: number;
      lng: number;
    };
  }>;
}

interface HeadlessMenuComponents {
  Button?: ComponentLike<{
    Element: HTMLButtonElement;
    Args: {};
    Blocks: {
      default: [];
    };
  }>;
  Items?: ComponentLike<{
    Element: HTMLDivElement;
    Args: {};
    Blocks: {
      default: [];
    };
  }>;
}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    eq: typeof EqHelper;
    lte: typeof LteHelper;
    PopperJS: typeof PopperJS;
    "markdown-to-html": typeof MarkdownToHtml;
    "svg-jar": typeof SvgJarHelper;
    "ensure-safe-component": typeof ensureSafeComponent;
    Menu: ComponentLike<{
      Element: HTMLElement;
      Args: {};
      Blocks: {
        default: [menu: HeadlessMenuComponents];
      };
    }>;
    LeafletMap: ComponentLike<{
      Element: HTMLDivElement;
      Args: {
        lat: number;
        lng: number;
        zoom: number;
        onZoom: (event: WandertextLeafletEvent) => void;
        onLoad: (event: LeafletEvent) => void;
      };
      Blocks: {
        default: [layers: EmberLeafletLayers];
      };
    }>;
    EmberLeafletMapMarker: ComponentLike<{
      Element: HTMLDivElement;
      Args: {
        lat: number;
        lng: number;
      };
    }>;
  }
}
