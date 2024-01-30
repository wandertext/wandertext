import "@glint/environment-ember-loose";
import "@glint/environment-ember-loose/native-integration";
import { ComponentLike } from "@glint/template";
import { LeafletEvent } from "leaflet";
import { ensureSafeComponent } from "@embroider/util";
import "ember-css-transitions/glint";
import "ember-svg-jar/glint";
import "ember-page-title/glint";
import type EmberSvgJarRegistry from "ember-svg-jar/template-registry";
import EqHelper from "ember-truth-helpers";
import LteHelper from "ember-truth-helpers";
import MarkdownToHtml from "ember-cli-showdown/components/markdown-to-html";
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
  export default interface Registry extends EmberSvgJarRegistry {
    eq: typeof EqHelper;
    lte: typeof LteHelper;
    PopperJS: typeof PopperJS;
    "markdown-to-html": typeof MarkdownToHtml;
    "ensure-safe-component": typeof ensureSafeComponent;
    Menu: ComponentLike<{
      Element: HTMLElement;
      Args: {};
      Blocks: {
        default: [menu: HeadlessMenuComponents];
      };
    }>;
    EmberLeafletMapMarker: ComponentLike<{
      Element: HTMLDivElement;
      Args: {
        lat: number;
        lng: number;
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
  }
}
