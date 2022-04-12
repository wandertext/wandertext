import { Model, hasMany } from "miragejs";

export default Model.extend({
  entries: hasMany(),
  contributors: hasMany(),
  flags: hasMany(),
});
