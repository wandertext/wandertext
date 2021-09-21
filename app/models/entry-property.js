import Model, { attr, hasMany } from "@ember-data/model";

export default class EntryPropertyModel extends Model {
  @attr("string") name;
  @attr("string") type;
  @attr("string") help;
  @attr("string") inputLabel;
  @attr("string") owner;
  @attr("boolean") nullable;
  @hasMany("text") texts;
}
