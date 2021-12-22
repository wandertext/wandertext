import Ember from "ember";

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  // Interface Function extends Ember.FunctionPrototypeExtensions {}
}

export {};
