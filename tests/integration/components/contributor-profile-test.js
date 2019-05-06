import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | contributor-profile", function() {
  setupRenderingTest();

  it.skip("renders", async function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ContributorProfile />`);

    expect(this.element.textContent.trim()).to.equal("");

    // Template block usage:
    await render(hbs`
      <ContributorProfile>
        template block text
      </ContributorProfile>
    `);

    expect(this.element.textContent.trim()).to.equal("template block text");
  });
});