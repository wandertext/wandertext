import DS from "ember-data";
import LoadableModel from "ember-data-storefront/mixins/loadable-model";

const { attr, hasMany } = DS;

export default class Place extends DS.Model.extend(LoadableModel) {
  @attr("string") name;

  @attr("string") note;

  @attr("string") source;

  @attr("number") latitude;

  @attr("number") longitude;

  @attr("number") geonameId;

  @attr("number") confidence;

  @attr() bbox;

  @attr() createdOn; // Timestamp from Firestore;

  @attr() modifiedOn; // Timestamp from Firestore;

  @hasMany("entry", { async: false }) entries;

  @hasMany("flag", { async: false }) flags;

  @hasMany("contributor", { async: false }) contributors;
}
