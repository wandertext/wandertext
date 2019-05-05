import { Adapter } from "ember-pouch";
import { tracked } from "@glimmer/tracking";
import PouchDB from "pouchdb";
import config from "wandertext/config/environment";

export default class ApplicationAdapter extends Adapter {
  @tracked db;

  @tracked remoteDb;

  constructor(...args) {
    super(...args);
    this.db = new PouchDB(config.emberPouch.localDb);
    if (config.emberPouch.remoteDb) {
      this.remoteDb = new PouchDB(config.emberPouch.remoteDb, {
        fetch(url, opts) {
          opts.credentials = "include";
          return PouchDB.fetch(url, opts);
        }
      });
      this.db.sync(this.remoteDb, {
        live: true,
        retry: true
      });
    } else {
      this.remoteDb = null;
    }

    this.db.createIndex({
      index: {
        fields: ["data.name"],
        name: "data-name",
        ddoc: "data-name",
        type: "json"
      }
    });
    this.db.createIndex({
      index: {
        fields: ["data.slug"],
        name: "data-slug",
        ddoc: "data-slug",
        type: "json"
      }
    });
  }
}
