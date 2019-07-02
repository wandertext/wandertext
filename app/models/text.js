import DS from "ember-data";
import LoadableModel from "ember-data-storefront/mixins/loadable-model";

const { attr, hasMany } = DS;

export default class Text extends DS.Model.extend(LoadableModel) {
  @attr("string") name;

  @attr("string") popupTemplate;

  @attr("string") markdownName;

  @attr("string") markdownBlurb;

  @attr("string") url;

  @attr("string") imgSrc;

  @attr("string") imgCredit;

  @attr("string") imgHref;

  @attr("number") year;

  @attr() entryProperties;

  @attr() entrySort;

  @attr("date") createdOn; // Timestamp from Firestore;

  @attr("date") modifiedOn; // Timestamp from Firestore;

  @hasMany("entry", { async: false }) entries;

  @hasMany("contributor", { async: false }) contributors;

  @hasMany("flag", { async: false }) flags;
}
