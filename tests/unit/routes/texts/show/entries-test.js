import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | texts/show/entries", function() {
  setupTest();

  it("exists", function() {
    const route = this.owner.lookup("route:texts/show/entries");
    expect(route).to.be.ok;
  });
});
