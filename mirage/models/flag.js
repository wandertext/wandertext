import { Model, belongsTo } from "ember-cli-mirage";

export default Model.extend({
  contributor: belongsTo("creator"),
  place: belongsTo(),
  text: belongsTo(),
  entry: belongsTo(),
});
