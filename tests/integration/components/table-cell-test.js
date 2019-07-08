/* eslint no-unused-vars: 1 */
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
    this.validate = () => true;
    this.showModal = () => true;
  });

  /* Causing problems with emberfire.
  it("renders with the property's name", async function() {
    await render(
      hbs`<TableCell 
      @column={{this.column}}
      @changeset={{changeset this.entry}}
      @showModal={{this.showModal}}
      @focusIn={{action this.focusIn this.entry}}
      @validate={{action this.validate this.entry this.column.valuePath}}
      />`
    );
    expect(this.element.querySelector("input").value).to.equal("Place");
  });

  it("has a disabled input when the property is owned by another", async function() {
    this.column.property.owner = "someone-else";
    await render(
      hbs`<TableCell 
      @column={{this.column}}
      @changeset={{changeset this.entry}}
      @showModal={{this.showModal}}
      @focusIn={{action this.focusIn this.entry}}
      @validate={{action this.validate this.entry this.column.valuePath}}
      />`
    );
    expect(this.element.querySelector("input").disabled).to.be.true;
  });

  it("has a disabled input when the property is readOnly", async function() {
    this.column.property.readOnly = true;
    await render(
      hbs`<TableCell 
      @column={{this.column}}
      @changeset={{changeset this.entry}}
      @showModal={{this.showModal}}
      @focusIn={{action this.focusIn this.entry}}
      @validate={{action this.validate this.entry this.column.valuePath}}
      />`
    );
    expect(this.element.querySelector("input").disabled).to.be.true;
  });

  it("shows the place name when the column is a Place", async function() {
    this.column.valuePath = "place";
    await render(
      hbs`<TableCell 
      @column={{this.column}}
      @changeset={{changeset this.entry}}
      @showModal={{this.showModal}}
      @focusIn={{action this.focusIn this.entry}}
      @validate={{action this.validate this.entry this.column.valuePath}}
      />`
    );
    expect(this.element).to.contain.text("Testing Ground");
  });

  it("shows the date if the column is a date", async function() {
    const date = new Date("May 6, 1976");
    this.entry.createdOn = date;
    this.column.valuePath = "createdOn";
    await render(
      hbs`<TableCell 
      @column={{this.column}}
      @changeset={{changeset this.entry}}
      @showModal={{this.showModal}}
      @focusIn={{action this.focusIn this.entry}}
      @validate={{action this.validate this.entry this.column.valuePath}}
      />`
    );
    expect(this.element).to.contain.text("1976-05-06");
  });

  */
});
