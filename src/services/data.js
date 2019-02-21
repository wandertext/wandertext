/* eslint camelcase: 0 */
import Service from "@ember/service";
import PouchDB from "pouchdb";
import pouchDBFind from "pouchdb-find";
import config from "../../config/environment";

export default class DataService extends Service {
  db = this.initDB();

  initDB() {
    PouchDB.plugin(pouchDBFind);
    return new PouchDB(config.couchdb);
  }

  async getAll() {
    const result = await this.db.allDocs({
      include_docs: true
    });
    return result.rows.map(row => {
      return { title: row.doc.title };
    });
  }

  async getInstancesByText(text) {
    const instances = await this.db
      .createIndex({
        index: {
          fields: ["type", "text"],
          name: "instances-by-text",
          ddoc: "instances-by-text"
        }
      })
      .then(() => {
        return this.db.find({
          selector: {
            type: "instance",
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
    return instances;
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
}
