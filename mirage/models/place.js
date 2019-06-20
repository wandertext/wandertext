import { Model, hasMany } from "ember-cli-mirage";

export default Model.extend({
  entries: hasMany("entry", { async: false }),
  contributors: hasMany("contributor", { async: false })
});
