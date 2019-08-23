/* eslint prefer-rest-params: 1 */
import DS from "ember-data";
import config from "wandertext/config/environment";
import { pluralize } from "ember-inflector";

export default class ApplicationAdapter extends DS.JSONAPIAdapter {
  host = config.apiHost;

  urlForQuery(query, model) {
    if (query.filter && query.filter.model) {
      const name = pluralize(query.filter.model.constructor.modelName);
      const { id } = query.filter.model;
      const namespace = this.namespace ? `${this.namespace}/` : "";
      delete query.filter.model;
      return `${this.host}/${namespace}${name}/${id}/${pluralize(model)}`;
    }

    return this._super(...arguments);
  }
}
