import Model from "ember-pouch/model";
import DS from "ember-data";

const { attr, hasMany } = DS;

export default class Contributor extends Model {
  @attr("string") username;

  @attr("string", { defaultValue: "github" }) authentication; // "github" or "uni"

  @attr("string", { defaultValue: "" }) githubAvatarUrl;

  @attr("string") firstName;

  @attr("string") lastName;

  @attr("boolean", { defaultValue: false }) enabled;

  @attr("boolean", { defaultValue: false }) editor;

  @attr("boolean", { defaultValue: false }) admin;

  @attr() nywalkerProperties;

  @hasMany("entry") entries;

  @hasMany("flag") flags;

  @hasMany("place") places;

  @hasMany("text", { async: false }) texts;

  @attr("date") createdOn;

  @attr("date") modifiedOn;
}
