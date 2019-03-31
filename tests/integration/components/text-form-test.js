import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | text-form", function() {
  const hooks = setupRenderingTest();

  hooks.beforeEach(async function() {
    // This.store = this.owner.lookup("service:store");
    await render(hbs`<TextForm />`);
  });

  it("renders as #text-form", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    expect(this.element.querySelector("#text-form")).to.be.ok;
  });

  it("has a “Create” button", function() {
    expect(this.element.querySelector("button").textContent.trim()).to.equal(
      "Create"
    );
  });

  // I mean, these tests pass the *acceptance* test?
  it.skip("has an #input-name input box", function() {
    expect(this.element.querySelector("#input-name")).to.be.ok;
  });

  it.skip("has an #input-slug input box", function() {
    expect(this.element.querySelector("#input-slug")).to.be.ok;
  });

  it.skip("has an #input-entrySort input box", function() {
    expect(this.element.querySelector("#input-entrySort")).to.be.ok;
  });
});
