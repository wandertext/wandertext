import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render, find } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | entry-form", function() {
  const hooks = setupRenderingTest();

  hooks.beforeEach(async function() {
    const store = this.owner.lookup("service:store");
    const texts = await store.findAll("text");
    this.text = texts.firstObject;
    this.text.set("entryProperties", [
      { name: "prop1" },
      { name: "prop2" },
      { name: "prop3" }
    ]);
    await render(hbs`<EntryForm @text={{this.text}} />`);
  });

  it("renders as #entry-form", function() {
    expect(find("#entry-form")).to.be.ok;
  });

  it("has a <CreateButton> button", function() {
    expect(find("button.create-entry-button")).to.be.ok;
  });

  it("has a button that reads “Create New Entry”", function() {
    expect(
      this.element
        .querySelector("button.create-entry-button")
        .textContent.trim()
    ).to.equal("Create New Entry");
  });

  it("has an #input-attestedName input box", function() {
    expect(find("#input-attestedName")).to.be.ok;
  });

  it("has an #input-entrySort box with a placeholder of text.entrySort", function() {
    expect(find("#input-entrySort")).to.be.ok;
    expect(find("#input-entrySort")).to.have.attribute(
      "placeholder",
      this.text.entrySort
    );
  });

  it("has an input box for each of text.entryProperties", function() {
    this.text.entryProperties.forEach(prop => {
      expect(find(`#input-entryProperty-${prop.name}`)).to.be.ok;
      expect(find(`#input-entryProperty-${prop.name}`)).to.have.attribute(
        "placeholder",
        prop.name
      );
    });
  });

  it("shows no entry properties if the text has none.");
});
