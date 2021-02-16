import yadda from "yadda";
import { click, fillIn, visit } from "@ember/test-helpers";

export default function (assert) {
  return yadda.localisation.default
    .library()
    .given("I am a creator", function () {
      return assert.ok(true, this.step);
    })
    .when("I visit the list of $model", async function (model) {
      await visit(`/${model}`);
      return assert.ok(true, this.step);
    })
    .when("I press the $button button", async function (button) {
      const buttonBody = button.replaceAll(/"/g, "");
      const buttonClass = buttonBody.replaceAll(/ /g, "-").toLowerCase();
      assert.dom(`button.${buttonClass}`).hasText(buttonBody);
      await click(`button.${buttonClass}`);
      return assert.ok(true, this.step);
    })
    .when(
      "I type in $value as the $parameter",
      async function (value, parameter) {
        parameter = parameter.toLowerCase();
        value = value.replaceAll(/"/g, "");
        assert.dom(`input[name="${parameter}"]`).exists();
        await fillIn(`input[name="${parameter}"]`, value);
        assert.ok(true, this.step);
      }
    )
    .then("I should receive an error", function () {
      assert.dom(".error").exists();
      assert.ok(true, this.step);
    });
}
