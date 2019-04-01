import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | texts/show/entry", function() {
  setupTest();

  it("exists", function() {
    const route = this.owner.lookup("route:texts/show/entry");
    expect(route).to.be.ok;
  });
});
