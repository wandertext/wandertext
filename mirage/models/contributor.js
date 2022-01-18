import { Model, hasMany } from "miragejs";

export default Model.extend({
  entries: hasMany(),
  places: hasMany(),
  texts: hasMany(),
  flags: hasMany(),
});
