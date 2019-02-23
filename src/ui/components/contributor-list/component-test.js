import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render, find } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | contributor-list", function() {
  setupRenderingTest();

  it("renders", async function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ContributorList />`);

    expect(find("#contributor-list")).to.be.ok;

    // Template block usage:
    await render(hbs`
      <ContributorList>
        template block text
      </ContributorList>
    `);

    expect(find("#contributor-list")).to.contain.text("template block text");
  });
});
