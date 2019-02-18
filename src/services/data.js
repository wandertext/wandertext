/* eslint camelcase: 0 */
import Service from "@ember/service";
import PouchDB from "pouchdb";
import config from "../../config/environment";

export default class DataService extends Service {
  db = new PouchDB(config.couchdb);

  async getAll() {
    const result = await this.db.allDocs({
      include_docs: true
    });
    return result.rows.map(row => {
      return { title: row.doc.title };
    });
  }

  async getText(slug) {
    let docId = "8a915f90dc5b231bf7f57601cb00f669";
    if (slug === "nightwood") {
      docId = "8a915f90dc5b231bf7f57601cb011c57";
    }

    const doc = await this.db.get(docId);

    return doc;
  }
}
