import DS from "ember-data";

const { attr, belongsTo } = DS;

export default class Flag extends DS.Model {
  @attr("string") comment;

  @attr("date") createdOn;

  @attr("date") modifiedOn;

  @attr() nywalkerProperties;

  @belongsTo("contributor", { async: false }) contributor;

  @belongsTo("text", { async: false }) text;

  @belongsTo("entry", { async: false }) entry;

  @belongsTo("place", { async: false }) place;
}
