/* eslint
  func-names: "off",
  no-alert: "off",
  no-undef: "off",
  no-unused-vars: "off"
 */

import { modifier } from "ember-modifier";

export default modifier(function onSwipeLeft(element /* , params, hash */) {
  const touchEvents = [];

  function handleStart(event) {
    event.preventDefault();
    // We want only to react to two-finger events.
    if (event.targetTouches.length === 2) {
      for (let i = 0; i < event.targetTouches.length; i += 1) {
        touchEvents.push(event.targetTouches[i]);
      }

      alert(touchEvents);
    } else {
      alert("Just one touch");
    }
  }

  function handleEnd(event) {}

  function handleMove(event) {}

  element.addEventListener("touchstart", handleStart);
  element.addEventListener("touchend", handleEnd);
  element.addEventListener("touchcancel", handleEnd);
  element.addEventListener("touchmove", handleMove);

  return () => {
    element.removeEventListener("touchstart", handleStart);
    element.removeEventListener("touchend", handleEnd);
    element.removeEventListener("touchcancel", handleEnd);
    element.removeEventListener("touchmove", handleMove);
  };
});
