import Model, { attr, hasMany } from "@ember-data/model";

export default class ContributorModel extends Model {
  // Unclear what the authentication attr is
  @attr("string") authentication;
  @attr("string") firstName;
  @attr("string") lastName;
  @attr("boolean") enabled;
  @attr("boolean") editor;
  @attr("boolean") admin;
  @attr("date", {
    defaultValue() {
      return new Date();
    },
  })
  createdAt;

  @attr("date") modifiedAt;
  @hasMany("entry") entries;
  @hasMany("place") places;
  @hasMany("text") texts;
  @hasMany("flag") flags;
}
