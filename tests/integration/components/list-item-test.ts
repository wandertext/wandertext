import { module, skip, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { MirageTestContext } from "wandertext";
import Store from "@ember-data/store";
import { setupMirage } from "ember-cli-mirage/test-support";

module("Integration | Component | list-item", function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test("it renders with an InfoBox", async function(assert) {
    await render(hbs`<ListItem />`);

    assert.dom("[data-test-info-box]").exists();
  });

  test("it shows the model's name property", async function(this: MirageTestContext, assert) {
    this.server.create("text");
    const store = this.owner.lookup("service:store") as Store;
    const text = await store.findRecord("text", 1);
    this.set("model", text);

    await render(hbs`<ListItem @model={{this.model}} />`);

    assert.dom("[data-test-info-box]").includesText(text.name);
  });

  skip("it has a map that shows associated places", async function(this: MirageTestContext, assert) {
    const store = this.owner.lookup("service:store") as Store;
    const text = this.server.create("text");
    this.server.createList("place", 10);
    const places = this.server.schema.all("place");
    this.server.createList("entry", 10, {
      text,
      place: () => places.models[Math.floor(Math.random() * 10)],
    } as object);

    const entries = await store.findAll("entry", { include: "text,place" });
    const entriesArray = entries.toArray();
    console.log(entriesArray);

    assert.ok(true);
  });

  // skip("it has a markers getter that returns an array of places", async function(this: MirageTestContext, assert){
  //   const store = this.owner.lookup("service:store") as Store;
  //   const text = this.server.create("text");
  //   this.server.createList("place", 10);
  //   const places = this.server.schema.all("place");
  //   this.server.createList("entry", 10, {
  //     text,
  //     place: () => places.models[Math.floor(Math.random() * 10)],
  //   } as object);

  // });

  skip("it has a @model argument");
  skip("it has a @linkToRoute argument");
  skip("it has a mapVisible property");
});
