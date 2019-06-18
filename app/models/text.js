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

  @attr() entryProperties;

  @attr() entrySort;

  @attr() nywalkerProperties;

  @hasMany("entry", { async: true }) entries;

  @hasMany("contributor", { async: true }) contributors;

  @hasMany("flag", { async: true }) flags;

  @attr("date") createdOn;

  @attr("date") modifiedOn;
}
