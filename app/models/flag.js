import DS from "ember-data";

const { attr, belongsTo } = DS;

export default class Flag extends DS.Model {
  @attr("string") comment;

  @attr("date") createdOn; // Timestamp from Firestore;

  @attr("date") modifiedOn; // Timestamp from Firestore;

  @attr() nywalkerProperties;

  @belongsTo("contributor") contributor;

  @belongsTo("text") text;

  @belongsTo("entry") entry;

  @belongsTo("place") place;
}
