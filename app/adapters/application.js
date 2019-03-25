/* eslint camelcase: 0 */
import { Adapter } from "ember-pouch";
import PouchDB from "pouchdb";
import config from "wandertext/config/environment";
import { assert } from "@ember/debug";
import { isEmpty } from "@ember/utils";

async function createDb() {
  const { localDb } = config.emberPouch;

  assert("emberPouch.localDb must be set", !isEmpty(localDb));

  const db = new PouchDB(localDb);

  if (config.emberPouch.remoteDb) {
    const remoteDb = new PouchDB(config.emberPouch.remoteDb, {
      skip_setup: true
    });

    db.sync(remoteDb, {
      live: true,
      retry: true
    });
  }

  return db;
}

export default class ApplicationAdapter extends Adapter {
  db = createDb();
}
