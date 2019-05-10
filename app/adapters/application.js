/* eslint capitalized-comments: 0 */
import { Adapter } from "ember-pouch";
import { tracked } from "@glimmer/tracking";
import PouchDB from "pouchdb";
import config from "wandertext/config/environment";

export default class ApplicationAdapter extends Adapter {
  @tracked db = new PouchDB(config.emberPouch.localDb);

  @tracked remoteDb = null;

  constructor(...args) {
    super(...args);
    if (config.emberPouch.remoteDb) {
      this.remoteDb = new PouchDB(config.emberPouch.remoteDb);
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
    }
  }
}
