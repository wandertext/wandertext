import { Model, belongsTo } from "ember-cli-mirage";

export default Model.extend({
  place: belongsTo(),
  text: belongsTo(),
});