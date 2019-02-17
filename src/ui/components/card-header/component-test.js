import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | card-header", function() {
  setupRenderingTest();

  it.skip("is called #the-card-header", async function() {
    await render(hbs`<CardHeader />`);
    expect(find("#the-card-header")).to.be.ok;
  });

  it.skip("renders", async function() {
    await render(hbs`<CardHeader />`);
    expect(find("#the-card-header")).to.contain.text("Wandertext");
    await render(hbs`
      <CardHeader>
        template block text
      </CardHeader>
    `);
    expect(find("#the-card-header")).to.contain.text("template block text");
  });
});
