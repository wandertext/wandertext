/* eslint camelcase: 0 */
import { Adapter } from "ember-pouch";
import PouchDB from "pouchdb";
import config from "wandertext/config/environment";
import { assert } from "@ember/debug";
import { isEmpty } from "@ember/utils";

export default class ApplicationAdapter extends Adapter {
  constructor(...args) {
    super(...args);
    const localDb = config.emberPouch.localDb || "wandertext-local";

    assert("emberPouch.localDb must be set", !isEmpty(localDb));

    const db = new PouchDB(localDb);

    if (config.emberPouch.remoteDb) {
      const remoteDb = new PouchDB(config.emberPouch.remoteDb, {
        fetch(url, opts) {
          opts.credentials = "include";
          return PouchDB.fetch(url, opts);
        }
      });

      db.sync(remoteDb, {
        live: true,
        retry: true
      });
    }

    return this;
  }
}
