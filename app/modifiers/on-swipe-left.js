/* eslint
  func-names: "off",
  no-alert: "off",
  no-undef: "off",
  no-unused-vars: "off"
 */

import { modifier } from "ember-modifier";
import Hammer from "hammerjs";

export default modifier(function onSwipeLeft(element /* , params, hash */) {
  const hammer = new Hammer.Manager(element);

  hammer.add(
    new Hammer.Swipe({
      event: "doubleswipeleft",
      pointers: 2,
      direction: Hammer.DIRECTION_LEFT,
    })
  );

  hammer.on("doubleswipeleft", () => {
    alert("doubleswipeleft");
  });

  return hammer.off("doubleswipeleft");
});
