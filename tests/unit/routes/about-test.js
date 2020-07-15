import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | about", function () {
  setupTest();

  it("exists", function () {
    const route = this.owner.lookup("route:about");
    expect(route).to.be.ok;
  });
});
