import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import { setupMirage } from "ember-cli-mirage/test-support";
import { authenticateSession } from "ember-simple-auth/test-support";
import hbs from "htmlbars-inline-precompile";

describe("Integration | Component | table-cell", function() {
  const hooks = setupRenderingTest();
  setupMirage(hooks);

  hooks.beforeEach(async function() {
    authenticateSession();
    this.store = this.owner.lookup("service:store");
    this.currentContributor = this.owner.lookup("service:currentContributor");
    this.currentContributor.contributor = {
      username: "github-username",
      id: "contrib-id",
      firstName: "contrib-first",
      lastName: "contrib-last"
    };
    this.place = await this.server.create("place", { name: "Testing Ground" });
    this.entry = await this.server.create("entry", {
      attestedName: "Place",
      place: this.place,
      properties: {
        page: 2,
        sequence: 3,
        special: "special",
        specialReadonly: "readOnly",
        diffOwner: "diffOwner"
      }
    });
    this.column = {
      label: "label",
      valuePath: "properties.page",
      property: { name: "page" }
    };
  });

  it("renders with the property's name", async function() {
    await render(
      hbs`<TableCell @column={{this.column}} @entry={{this.entry}} />`
    );
    expect(this.element.querySelector("input").value).to.equal("2");
  });

  it("has a disabled input when the property is owned by another", async function() {
    this.column.property.owner = "someone-else";
    await render(
      hbs`<TableCell @column={{this.column}} @entry={{this.entry}} />`
    );
    expect(this.element.querySelector("input").disabled).to.be.true;
  });

  it("has a disabled input when the property is readOnly", async function() {
    this.column.property.readOnly = true;
    await render(
      hbs`<TableCell @column={{this.column}} @entry={{this.entry}} />`
    );
    expect(this.element.querySelector("input").disabled).to.be.true;
  });

  it.only("shows the place name when the column is a Place", async function() {
    this.set("showModal", function() {
      return true;
    });
    this.column.valuePath = "place";
    await render(
      hbs`<TableCell @column={{this.column}} @entry={{this.entry}} @showModal={{this.showModal}} />`
    );
    expect(this.element).to.contain.text("Testing Ground");
  });
});
