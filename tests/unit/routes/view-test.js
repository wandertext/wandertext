import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | view", function() {
  setupTest();

  it("exists", function() {
    const route = this.owner.lookup("route:view");
    expect(route).to.be.ok;
  });
});
