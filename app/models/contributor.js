import DS from "ember-data";

const { attr, hasMany } = DS;

export default class Contributor extends DS.Model {
  @attr("string") username;

  @attr("string", { defaultValue: "github" }) authentication; // "github" or "uni"

  @attr("string", { defaultValue: "" }) githubAvatarUrl;

  @attr("string") firstName;

  @attr("string") lastName;

  @attr("boolean", { defaultValue: false }) enabled;

  @attr("boolean", { defaultValue: false }) editor;

  @attr("boolean", { defaultValue: false }) admin;

  @attr() nywalkerProperties;

  @hasMany("entry", { async: true }) entries;

  @hasMany("flag", { async: true }) flags;

  @hasMany("place", { async: true }) places;

  @hasMany("text", { async: true }) texts;

  @attr("date") createdOn;

  @attr("date") modifiedOn;
}
