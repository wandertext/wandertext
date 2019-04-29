import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Route | texts/text", function() {
  setupTest();

  it("exists", function() {
    const route = this.owner.lookup("route:texts/text");
    expect(route).to.be.ok;
  });
});
