import { module, test, skip } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | map", hooks => {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(hbs`<Map />`);

    assert.dom().includesText("");
  });

  skip("it expects a @fullScreen argument");
  skip("it expects a @defaultModalOpen argument");
  skip("it expects a @modalContentComponent argument");
  skip("it expects a @markers argument");

  skip("it is the full window size when @fullScreen is true");
  skip("it auto-opens a modal when @defaultModalOpen is true");
  skip("The modal content component is...");
});
