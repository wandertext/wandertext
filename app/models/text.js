import Model, { attr, hasMany } from "@ember-data/model";

export default class TextModel extends Model {
  @attr("string") name;
  @attr("string") popupTemplate;
  @attr("string") markdownName;
  @attr("string") markdownBlurb;
  @attr("string") url;
  @attr("string") imgSrc;
  @attr("string") imgCredit;
  @attr("string") imgHref;
  @attr("number") year;
  // @attr("string") entryCount;
  @attr("string") entrySort;
  @attr("string") properties;
  @attr("date", {
    defaultValue() {
      return new Date();
    },
  })
  createdAt;

  @attr("date") modifiedAt;
  @hasMany("entryProperty") entryProperties;
  @hasMany("entry") entries;
  @hasMany("contributor") contributors;
  @hasMany("flag") flags;
}
