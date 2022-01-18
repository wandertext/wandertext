import { Model, hasMany, belongsTo } from "miragejs";

export default Model.extend({
  place: belongsTo(),
  text: belongsTo(),
  contributors: hasMany(),
  flags: hasMany(),
});
