import Model from "ember-pouch/model";
import DS from "ember-data";

const { attr, hasMany } = DS;

export default class User extends Model {
  @attr("string") username;

  @attr("string", { defaultValue: "github" }) authentication; // "github" or "uni"

  @attr("string") citationName;

  @attr("boolean", { defaultValue: false }) superUser;

  @attr("boolean", { defaultValue: false }) admin;

  @hasMany("entry") entries;

  @hasMany("place") places;

  @hasMany("text") texts;

  @attr("date") dateCreated;

  @attr("date") dateModified;
}
