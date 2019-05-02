import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | application", function() {
  setupTest();

  it("exists", function() {
    const route = this.owner.lookup("route:application");
    expect(route).to.be.ok;
  });
});
