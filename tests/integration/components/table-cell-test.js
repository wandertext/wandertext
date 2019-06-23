import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { fillIn, render } from "@ember/test-helpers";
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
    const entry = await this.server.create("entry", {
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
    this.entry = await this.store.findRecord("entry", entry.id, {
      include: "place"
    });
    this.column = {
      label: "label",
      valuePath: "attestedName",
      property: { name: "page" }
    };
    this.focusIn = () => true;
  });

  it("renders with the property's name", async function() {
    await render(
      hbs`<TableCell @column={{this.column}} @entry={{this.entry}} @focusIn={{this.focusIn}} />`
    );
    expect(this.element.querySelector("input").value).to.equal("Place");
  });

  it("updates the entry's property on the model", async function() {
    await render(
      hbs`<TableCell @column={{this.column}} @entry={{this.entry}} @focusIn={{this.focusIn}} />`
    );
    const input = this.element.querySelector("input");
    expect(this.entry.hasDirtyAttributes).to.be.false;
    await fillIn(input, "New Placename");
    expect(this.entry.hasDirtyAttributes).to.be.true;
    expect(this.entry.attestedName).to.equal("New Placename");
  });

  it("has a disabled input when the property is owned by another", async function() {
    this.column.property.owner = "someone-else";
    await render(
      hbs`<TableCell @column={{this.column}} @entry={{this.entry}} @focusIn={{this.focusIn}} />`
    );
    expect(this.element.querySelector("input").disabled).to.be.true;
  });

  it("has a disabled input when the property is readOnly", async function() {
    this.column.property.readOnly = true;
    await render(
      hbs`<TableCell @column={{this.column}} @entry={{this.entry}} @focusIn={{this.focusIn}} />`
    );
    expect(this.element.querySelector("input").disabled).to.be.true;
  });

  it.only("shows the place name when the column is a Place", async function() {
    this.set("showModal", function() {
      return true;
    });
    this.column.valuePath = "place";
    await render(
      hbs`<TableCell @column={{this.column}} @entry={{this.entry}} @showModal={{this.showModal}} @focusIn={{this.focusIn}} />`
    );
    expect(this.element).to.contain.text("Testing Ground");
  });

  it("shows the date if the column is a date", async function() {
    const date = new Date("May 6, 1976");
    this.entry.createdOn = date;
    this.column.valuePath = "createdOn";
    await render(
      hbs`<TableCell @column={{this.column}} @entry={{this.entry}} @focusIn={{this.focusIn}} />`
    );
    expect(this.element).to.contain.text("1976-05-06");
  });
});
