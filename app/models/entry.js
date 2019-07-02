import DS from "ember-data";
import LoadableModel from "ember-data-storefront/mixins/loadable-model";

const { attr, belongsTo, hasMany } = DS;

export default class Entry extends DS.Model.extend(LoadableModel) {
  @attr("string") attestedName;

  @attr("string") note;

  @attr() properties;

  @attr() createdOn; // Timestamp from Firestore;

  @attr() modifiedOn; // Timestamp from Firestore;

  @belongsTo("place", { async: false }) place;

  @belongsTo("text", { async: false }) text;

  @hasMany("contributor", { async: false }) contributors;

  @hasMany("flag", { async: false }) flags;
}
