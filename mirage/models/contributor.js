import { Model, hasMany } from "ember-cli-mirage";

export default Model.extend({
  entries: hasMany("entry", { async: false }),
  places: hasMany("place", { async: false }),
  texts: hasMany("text", { async: false })
});
