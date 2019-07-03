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

  @attr("date") createdOn; // Timestamp from Firestore;

  @attr("date") modifiedOn; // Timestamp from Firestore;

  @hasMany("entry") entries;

  @hasMany("flag") flags;

  @hasMany("place") places;

  @hasMany("text") texts;
}
