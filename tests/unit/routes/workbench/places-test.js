import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | workbench/places", function() {
  setupTest();

  it("exists", function() {
    const route = this.owner.lookup("route:workbench/places");
    expect(route).to.be.ok;
  });
});
