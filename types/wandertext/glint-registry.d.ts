import "@glint/environment-ember-loose";
import "@glint/environment-ember-loose/native-integration";
import { ComponentLike, HelperLike } from "@glint/template";
import Modifier from "ember-modifier";
import { LeafletEvent } from "leaflet";
import { IconSlug, WandertextLeafletEvent } from "wandertext";

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

interface CssTransitionSignature {
  Element: Element;
  Args: {
    Positional?: [className: string];
    Named: {
      enterClass?: string;
      enterActiveClass?: string;
      enterToClass?: string;
      leaveClass?: string;
      leaveActiveClass?: string;
      leaveToClass?: string;
    };
  };
}

declare class CssTransitionModifier extends Modifier<CssTransitionSignature> {}

declare module "@glint/environment-ember-loose/registry" {
  export default interface Registry {
    "css-transition": typeof CssTransitionModifier;
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
    "svg-jar": HelperLike<{
      Args: {
        Positional: [element: IconSlug];
        Named: {
          title?: string;
          desc?: string;
          class?: string;
          role?: string;
          width?: string;
        };
      };
      Return: HTMLElement;
    }>;
    "page-title": HelperLike<{
      Args: { Positional: [title: string] };
      Return: void;
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
