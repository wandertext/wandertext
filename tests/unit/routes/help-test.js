import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | help", function() {
  setupTest();

  it("exists", function() {
    const route = this.owner.lookup("route:help");
    expect(route).to.be.ok;
  });
});
