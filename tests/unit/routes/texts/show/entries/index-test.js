import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | texts/show/entries/index", function() {
  setupTest();

  it("exists", function() {
    const route = this.owner.lookup("route:texts/show/entries/index");
    expect(route).to.be.ok;
  });
});
