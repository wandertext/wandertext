import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | texts/show", function() {
  setupTest();

  it("exists", function() {
    const route = this.owner.lookup("route:texts/show");
    expect(route).to.be.ok;
  });
});
