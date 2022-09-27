import PlaceModel from "wandertext/models/place";
import type MirageTestContext from "./mirage-test-context";
import type { LeafletEvent, Map } from "leaflet";
// This complains about importing Ember, and I'm not a big fan of it, either.
// import Ember from "ember";

// declare global {
//   interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
//   // Interface Function extends Ember.FunctionPrototypeExtensions {}
// }
interface WandertextLeafletEvent extends LeafletEvent {
  target: Map;
}

interface Marker extends PlaceModel {
  count?: number;
  placeName?: string;
  latitude: number;
  longitude: number;
}

type IconSlug =
  | "about"
  | "caret-down"
  | "caret-left"
  | "caret-right"
  | "caret-up"
  | "close"
  | "contributor-delete"
  | "contributor-new"
  | "contributor"
  | "contributors"
  | "credits"
  | "dot-marker"
  | "edit"
  | "entry-delete"
  | "entry-new"
  | "entry"
  | "help"
  | "login"
  | "logo"
  | "map"
  | "menu"
  | "place-delete"
  | "place-new"
  | "place"
  | "privacy"
  | "search"
  | "stats"
  | "text"
  | "text-delete"
  | "text-new";

export { Marker, IconSlug, MirageTestContext, WandertextLeafletEvent };
