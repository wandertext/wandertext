import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Model | text", function() {
  setupTest();

  // Replace this with your real tests.
  it("exists", function() {
    const store = this.owner.lookup("service:store");
    const model = store.createRecord("text", {});
    expect(model).to.be.ok;
  });
});
