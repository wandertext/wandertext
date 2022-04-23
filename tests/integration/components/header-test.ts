import { module, test, skip } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import faker from "@faker-js/faker";

module("Integration | Component | header", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    await render(hbs`<Header @title="Test Title" />`);

    assert.dom().includesText("Test Title");
  });

  test("it renders with Wandertext icon and title with no attributes set", async function(assert) {
    await render(hbs`<Header />`);

    assert.dom("h1").includesText("Wandertext");
    assert.dom("[data-test-header-center]").includesText("Wandertext Logo");
  });

  test("it renders with place icon and random title when set", async function(assert) {
    const fakeTitle = faker.random.words(2);
    this.set("title", fakeTitle);
    await render(hbs`<Header @title={{this.title}} @icon="place" />`);

    assert.dom("h1").includesText(fakeTitle);
    assert.dom("[data-test-header-center]").includesText("Place Icon");
  });

  // This should be an acceptance test.
  skip("it features a back button");
});
