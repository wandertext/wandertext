import DS from "ember-data";
import LoadableModel from "ember-data-storefront/mixins/loadable-model";

const { attr, belongsTo, hasMany } = DS;

export default class Entry extends DS.Model.extend(LoadableModel) {
  @attr("string") attestedName;

  @attr("string") note;

  @attr() properties;

  @attr("date") createdOn; // Timestamp from Firestore;

  @attr("date") modifiedOn; // Timestamp from Firestore;

  @belongsTo("place") place;

  @belongsTo("text") text;

  @hasMany("contributor") contributors;

  @hasMany("flag") flags;
}
