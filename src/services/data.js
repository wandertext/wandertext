/* eslint camelcase: 0 */
import Service from "@ember/service";
import PouchDB from "pouchdb";
import pouchDBFind from "pouchdb-find";
import _intersectionBy from "lodash/intersectionBy";
import config from "../../config/environment";

export default class DataService extends Service {
  db = this._initDB();

  async getAll() {
    const result = await this.db.allDocs({
      include_docs: true
    });
    return result.rows.map(row => row.doc);
  }

  async getAllByType(type) {
    return this.db
      .createIndex({
        index: {
          fields: ["type"],
          name: "all-by-type",
          ddoc: "all-by-type"
        }
      })
      .then(() => {
        return this.db.find({
          selector: {
            type
          },
          limit: 10000
        });
      })
      .then(results => {
        if (results.docs.length > 0) {
          return results.docs;
        }
      })
      .catch(error => error);
  }

  async getDocById(id) {
    return this.db
      .createIndex({
        index: {
          fields: ["id"],
          name: "docs-by-id",
          ddoc: "docs-by-id"
        }
      })
      .then(() => {
        return this.db.find({
          selector: {
            id
          }
        });
      })
      .then(results => {
        if (results.docs.length > 0) {
          return results.docs;
        }
      })
      .catch(error => error);
  }

  async getEntriesByText(text) {
    const entries = await this.db
      .createIndex({
        index: {
          fields: ["type", "text"],
          name: "entries-by-text",
          ddoc: "entries-by-text"
        }
      })
      .then(() => {
        return this.db.find({
          selector: {
            type: "entry",
            text
          },
          limit: 10000
        });
      })
      .then(results => {
        if (results.docs.length > 0) {
          return results.docs;
        }
      })
      .catch(error => error);
    return entries;
  }

  async getTextBySlug(slug) {
    const doc = await this.db
      .createIndex({
        index: {
          fields: ["type", "slug"],
          name: "text-by-slug",
          ddoc: "text-by-slug"
        }
      })
      .then(() => {
        return this.db.find({
          selector: {
            type: "text",
            slug
          }
        });
      })
      .then(results => {
        if (results.docs.length > 0) {
          return results.docs[0];
        }
      })
      .catch(error => error);
    return doc;
  }

  getListFromTypeAndIds(type, list) {
    return this.getAllByType(type).then(docs => {
      return _intersectionBy(
        docs,
        list.map(id => {
          return { id };
        }),
        "id"
      );
    });
  }

  // “Private” properties.

  _initDB() {
    PouchDB.plugin(pouchDBFind);
    const local = new PouchDB("wandertext", { auto_compaction: true });
    const remote = new PouchDB(config.couchdb, { skip_setup: true });
    PouchDB.replicate(remote, local, { live: true, retry: true });
    return local;
  }
}
