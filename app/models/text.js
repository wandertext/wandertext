import DS from "ember-data";

const { attr, hasMany } = DS;

export default class Text extends DS.Model {
  @attr("string") name;

  @attr("string") slug;

  @attr("string") popupTemplate;

  @attr("string") markdownName;

  @attr("string") markdownBlurb;

  @attr("string") url;

  @attr("string") imgSrc;

  @attr("string") imgCredit;

  @attr("string") imgHref;

  @attr() entryProperties;

  @attr() entrySort;

  @attr() nywalkerProperties;

  @hasMany("entry", { async: false }) entries;

  @hasMany("contributor", { async: false }) contributors;

  @hasMany("flag", { async: false }) flags;

  @attr("date") createdOn;

  @attr("date") modifiedOn;
}
