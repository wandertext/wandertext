import { Adapter } from "ember-pouch";
import PouchDB from "pouchdb";
import config from "wandertext/config/environment";

export default class ApplicationAdapter extends Adapter {
  db = new PouchDB(config.emberPouch.localDb);

  get remoteDb() {
    const remoteDb = new PouchDB(config.emberPouch.remoteDb, {
      fetch(url, opts) {
        opts.credentials = "include";
        return PouchDB.fetch(url, opts);
      }
    });

    this.db.sync(remoteDb, {
      live: true,
      retry: true
    });

    return remoteDb;
  }
}
