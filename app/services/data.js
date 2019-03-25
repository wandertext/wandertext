/* eslint camelcase: 0 */
import Service from "@ember/service";
import PouchDB from "pouchdb";
import pouchDBFind from "pouchdb-find";
import ENV from "../config/environment";

export default class DataService extends Service {
  db = this._initDB();

  get docs() {
    return async () => {
      const result = await this.db.allDocs({
        include_docs: true
      });
      return result.rows.map(row => row.doc);
    };
  }

  // “Private” properties.

  _initDB() {
    PouchDB.plugin(pouchDBFind);
    const remote = new PouchDB(ENV.couchdb, { skip_setup: true });
    return remote;
  }
}
