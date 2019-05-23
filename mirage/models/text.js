import { Model, hasMany } from "ember-cli-mirage";

export default class TextModel extends Model {
  entries = hasMany();

  contributors = hasMany();
}
