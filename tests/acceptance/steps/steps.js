import yadda from "yadda";
// import { visit } from "@ember/test-helpers";

export default function (assert) {
  return yadda.localisation.default
    .library()
    .given("I am a creator", () => assert.ok(true, this.step));
}
