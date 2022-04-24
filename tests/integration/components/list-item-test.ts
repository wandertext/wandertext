import { module, skip, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import Store from "@ember-data/store";
import { setupMirage } from "ember-cli-mirage/test-support";
import { MirageTestContext } from "wandertext";
import TextModel from "wandertext/models/text";

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

  test("it has a button that, when you click on it, shows a map", async function(assert) {
    assert.expect(2);

    await render(hbs`<ListItem />`);

    assert.dom("[data-test-list-item-map-container]").doesNotExist();

    await click("[data-test-list-item-map-button]");

    assert.dom("[data-test-list-item-map-container]").exists();
  });

  skip("it has a @model argument");
  skip("it has a @linkToRoute argument");
  skip("it has a mapVisible property");

  module("when @model is Place", function() {
    skip("it has a markers getter that returns the place itself");
  });

  module("when @model is Text", function(hooks) {
    hooks.beforeEach(async function(this: MirageTestContext) {
      const text = this.server.create("text", {
        name: "Book One",
        markdownName: "_Book One Italics_",
      } as object);
      const places = this.server.createList("place", 10);
      this.server.createList("entry", 10, {
        text,
        place: () => places[Math.floor(Math.random() * 10)],
      } as object);
      const store = this.owner.lookup("service:store") as Store;
      const model = await store.findRecord("text", 1, {
        include: "entries,entries.place",
      });
      this.set("model", model);
    });

    test("it shows the Text's name as rendered markdown", async function(assert) {
      await render(hbs`<ListItem @model={{this.model}} />`);

      assert.dom("em").hasText("Book One Italics");
    });

    // This should be an acceptance test.
    skip("it has a map that shows an array of places", async function(this: MirageTestContext, assert) {
      // store doesn't seem to persist long enough to get entries passed down.
      // "but the store instance has already been destroyed"
      const text = this.model as TextModel;
      const count = [...new Set(text.entries.map(entry => entry.place))].length;
      await render(hbs`<ListItem @model={{this.model}} />`);
      await click("[data-test-list-item-map-button]");
      assert
        .dom("[data-test-map-leaflet-container-layers-marker]")
        .exists({ count });
      assert.ok(text);
    });
  });
});
