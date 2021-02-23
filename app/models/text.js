import Model, { attr, hasMany } from "@ember-data/model";

export default class TextModel extends Model {
  @hasMany("entry") entries;
  @attr("string") title;
}
