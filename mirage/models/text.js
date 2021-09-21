import { Model, hasMany } from "ember-cli-mirage";

export default Model.extend({
  entries: hasMany(),
  places: hasMany(),
  contributors: hasMany(),
  flags: hasMany(),
  entryProperties: hasMany(),
});
