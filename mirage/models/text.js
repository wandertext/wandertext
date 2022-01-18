import { Model, hasMany } from "miragejs";

export default Model.extend({
  entries: hasMany(),
  places: hasMany(),
  contributors: hasMany(),
  flags: hasMany(),
  entryProperties: hasMany(),
});
