import DS from "ember-data";
import LoadableModel from "ember-data-storefront/mixins/loadable-model";

const { attr, hasMany } = DS;

export default class Contributor extends DS.Model.extend(LoadableModel) {
  @attr("string", { defaultValue: "github" }) authentication; // "github" or "uni"

  @attr("string", { defaultValue: "" }) githubAvatarUrl;

  @attr("string") firstName;

  @attr("string") lastName;

  @attr("boolean", { defaultValue: false }) enabled;

  @attr("boolean", { defaultValue: false }) editor;

  @attr("boolean", { defaultValue: false }) admin;

  @attr("date") createdOn;

  @attr("date") modifiedOn;

  @hasMany("entry", { async: false }) entries;

  @hasMany("flag", { async: false }) flags;

  @hasMany("place", { async: false }) places;

  @hasMany("text", { async: false }) texts;
}
