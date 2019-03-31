import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | text-form", function() {
  const hooks = setupRenderingTest();

  hooks.beforeEach(async function() {
    this.store = this.owner.lookup("service:store");
    await render(hbs`<TextForm @store={{this.store}} />`);
  });

  it("renders as #text-form", function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    expect(this.element.querySelector("#text-form")).to.be.ok;
  });

  it("has a <CreateButton> button", function() {
    expect(this.element.querySelector("button.create-button")).to.be.ok;
  });

  it("has a button that reads “Create New Text”", function() {
    expect(
      this.element.querySelector("button.create-button").textContent.trim()
    ).to.equal("Create New Text");
  });

  it("has an #input-name input box", function() {
    expect(this.element.querySelector("#input-name")).to.be.ok;
  });

  it("has an #input-slug input box", function() {
    expect(this.element.querySelector("#input-slug")).to.be.ok;
  });

  it("has an #input-entrySort input box", function() {
    expect(this.element.querySelector("#input-entrySort")).to.be.ok;
  });
});
