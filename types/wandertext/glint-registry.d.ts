import "@glint/environment-ember-loose";
import "@glint/environment-ember-loose/native-integration";
import { ComponentLike, HelperLike } from "@glint/template";
import ClassBasedModifier from "ember-modifier";
import { LeafletEvent } from "leaflet";
import { IconSlug, WandertextLeafletEvent } from "wandertext";

interface CssTransitionArgs {
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

declare class CssTransition extends ClassBasedModifier<CssTransitionArgs> { }

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
    "css-transition": CssTransition;
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
      Args: {
        lat: number;
        lng: number;
        zoom: number;
        onZoom: (event: WandertextLeafletEvent) => void;
        onLoad: (event: LeafletEvent) => void;
      };
      Blocks: {
        layers: [tile: string];
      };
    }>;
    EpmModalContainer: ComponentLike;
  }
}
