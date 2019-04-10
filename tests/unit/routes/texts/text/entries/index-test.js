import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | texts/text/entries/index", function() {
  setupTest();

  it("exists", function() {
    const route = this.owner.lookup("route:texts/text/entries/index");
    expect(route).to.be.ok;
  });
});
