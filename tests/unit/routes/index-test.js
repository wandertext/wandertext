import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | index", function () {
  setupTest();

  it("exists", function () {
    const route = this.owner.lookup("route:index");
    expect(route).to.be.ok;
  });
});
