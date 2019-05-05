import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | login", function() {
  setupTest();

  it("exists", function() {
    const route = this.owner.lookup("route:login");
    expect(route).to.be.ok;
  });
});
