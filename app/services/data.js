/* eslint camelcase: 0 */
import Service from "@ember/service";
import { set } from "@ember/object";
import PouchDB from "pouchdb";
import pouchDBFind from "pouchdb-find";
import _intersectionBy from "lodash/intersectionBy";
import ENV from "../config/environment";

export default class DataService extends Service {
  db = this._initDB();

  async getAll() {
    const result = await this.db.allDocs({
      include_docs: true
    });
    return result.rows.map(row => row.doc);
  }

  async getAllByType(type) {
    try {
      await this.db.createIndex({
        index: {
          fields: ["type"],
          name: "all-by-type",
          ddoc: "all-by-type"
        }
      });
      const results = await this.db.find({
        selector: {
          type
        },
        limit: 10000
      });
      if (results.docs.length > 0) {
        return results.docs;
      }
    } catch (error) {
      return error;
    }
  }

  async getDocById(id) {
    try {
      await this.db.createIndex({
        index: {
          fields: ["id"],
          name: "docs-by-id",
          ddoc: "docs-by-id"
        }
      });
      const results = await this.db.find({
        selector: {
          id
        }
      });
      if (results.docs.length > 0) {
        return results.docs;
      }
    } catch (error) {
      return error;
    }
  }

  async getEntriesByText(text) {
    try {
      await this.db.createIndex({
        index: {
          fields: ["type", "text"],
          name: "entries-by-text",
          ddoc: "entries-by-text"
        }
      });
      const results = await this.db.find({
        selector: {
          type: "entry",
          text
        },
        limit: 10000
      });
      if (results.docs.length > 0) {
        return results.docs;
      }
    } catch (error) {
      return error;
    }
  }

  async getTextBySlug(slug) {
    try {
      await this.db.createIndex({
        index: {
          fields: ["type", "slug"],
          name: "text-by-slug",
          ddoc: "text-by-slug"
        }
      });
      const results = await this.db.find({
        selector: {
          type: "text",
          slug
        }
      });
      if (results.docs.length > 0) {
        return results.docs[0];
      }
    } catch (error) {
      return error;
    }
  }

  async getListFromTypeAndIds(type, list) {
    const docs = await this.getAllByType(type);
    return _intersectionBy(
      docs,
      list.map(id => {
        return { id };
      }),
      "id"
    );
  }

  // “Private” properties.

  _initDB() {
    PouchDB.plugin(pouchDBFind);
    const remote = new PouchDB(ENV.couchdb, { skip_setup: true });
    return remote;
  }

  _setDocs() {
    set(this, "docs", this.getAll());
  }
}
