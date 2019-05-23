import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { findAll, find, render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import faker from "faker";

describe("Integration | Component | text-entry-list", function() {
  const hooks = setupRenderingTest();

  hooks.beforeEach(async function() {
    this.placeNames = [
      faker.address.city(),
      faker.address.city(),
      faker.address.city()
    ];
    this.entries = this.placeNames.map(attestedName => {
      return { attestedName };
    });
    await render(hbs`<TextEntryList @entries={{this.entries}} />`);
  });

  it.skip("renders as #text-entry-list", function() {
    expect(find("#text-entry-list")).to.be.ok;
  });

  it.skip("lists Entries", function() {
    this.placeNames.forEach(placeName => {
      expect(
        findAll(".attested-name").map(node => node.textContent.trim())
      ).to.include(placeName);
    });
  });
});
