import "@glint/environment-ember-loose";
import "@glint/environment-ember-loose/native-integration";
import { ComponentLike, HelperLike } from "@glint/template";
import { LeafletEvent } from "leaflet";
import "ember-css-transitions/glint";
import "ember-svg-jar/glint";
import "ember-page-title/glint";
import { WandertextLeafletEvent } from "wandertext";

interface EmberLeafletLayers {
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

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    eq: HelperLike<{
      Args: {
        Positional: [a: string | number, b: string | number];
      };
      Return: boolean;
    }>;
    lte: HelperLike<{
      Args: {
        Positional: [a: number, b: number];
      };
      Return: boolean;
    }>;
    "markdown-to-html": HelperLike<{
      Args: {
        Named: {
          markdown?: string;
        };
        Positional: [markdownContent?: string];
      };
      Return: HTMLElement;
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
    EpmModalContainer: ComponentLike;
  }
}
