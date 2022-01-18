import { Model, hasMany } from "miragejs";

export default Model.extend({
  texts: hasMany(),
});
