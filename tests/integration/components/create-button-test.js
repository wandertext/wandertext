import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | create-button", function () {
  const hooks = setupRenderingTest();

  hooks.beforeEach(function () {
    this.myAction = () => true;
  });

  it("renders as button.create-button", async function () {
    // Set any properties with this.set('myProperty', 'value');
    await render(hbs`<CreateButton @action={{this.myAction}} />`);
    expect(this.element.querySelector("button.create-button")).to.be.ok;
  });

  it("renders its text as “Create New Blah,” fed from @buttonText", async function () {
    await render(
      hbs`<CreateButton @action={{this.myAction}} @buttonText="Blah" />`
    );
    expect(this.element.querySelector("button").textContent.trim()).to.equal(
      "Create New Blah"
    );
  });

  it("gets fed classes in @classes", async function () {
    await render(
      hbs`<CreateButton @action={{this.myAction}} @classes="foo bar" />`
    );
    expect(
      this.element
        .querySelector("button.create-button")
        .classList.contains("foo")
    ).to.be.ok;
    expect(
      this.element
        .querySelector("button.create-button")
        .classList.contains("bar")
    ).to.be.ok;
  });
});
