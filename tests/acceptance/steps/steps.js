import yadda from "yadda";
// import { visit } from "@ember/test-helpers";

export default function (assert) {
  return yadda.localisation.default
    .library()
    .given("I am a creator", function () {
      return assert.ok(true, this.step);
    })
    .when("I visit the list of texts")
    .when("I press the $button button", function (button) {
      button = button.replaceAll(/"/g, "");
      console.log(`$button: ${button}`);
      assert.ok(true, this.step);
    })
    .when("I type in $value as the $parameter", function (value, parameter) {
      value = value.replaceAll(/"/g, "");
      console.log(`$value and $parameter: ${value}, ${parameter}`);
      assert.ok(true, this.step);
    });
}
