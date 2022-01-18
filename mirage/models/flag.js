import { Model, belongsTo } from "miragejs";

export default Model.extend({
  contributor: belongsTo("creator"),
  place: belongsTo(),
  text: belongsTo(),
  entry: belongsTo(),
});
