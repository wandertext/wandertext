/* eslint
  func-names: "off",
  no-alert: "off",
  no-undef: "off",
  no-unused-vars: "off"
 */

import { modifier } from "ember-modifier";
import Hammer from "hammerjs";

export default modifier(function onSwipeLeft(element /* , params, hash */) {
  // Const hammer = new Hammer.Manager(element);

  const hammer = new Hammer(element);

  hammer.on("pan", ev => alert("panning"));

  // Element.addEventListener("click", () => alert("event click"));

  // hammer.add(
  //   new Hammer.Swipe({
  //     event: "doubleswipeleft",
  //     pointers: 2,
  //     direction: Hammer.DIRECTION_LEFT,
  //   })
  // );

  // hammer.on("doubleswipeleft", () => {
  //   alert("doubleswipeleft");
  // });

  // hammer.on("swipeleft", () => {
  //   alert("swipeleft");
  // });

  // return hammer.off("doubleswipeleft");
  return hammer.off("pan");
});
