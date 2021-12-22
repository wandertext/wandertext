import Model, { attr, hasMany } from "@ember-data/model";
import DS from "ember-data";
import EntryProperty from "./entry-property";
import Entry from "./entry";
import Contributor from "./contributor";
import Flag from "./flag";

export default class TextModel extends Model {
  @attr()
  declare name: string;

  @attr()
  declare popupTemplate?: string;

  @attr()
  declare markdownName?: string;

  @attr()
  declare markdownBlurb?: string;

  @attr()
  declare url?: string;

  @attr()
  declare imgSrc?: string;

  @attr()
  declare imgCredit?: string;

  @attr()
  declare imgHref?: string;

  @attr("number")
  declare year?: number;

  // @attr()
  // declare entryCount?: string;

  @attr()
  declare entrySort?: string;

  @attr()
  declare properties?: string;

  @attr("date", {
    defaultValue() {
      return new Date();
    },
  })
  declare createdAt: Date;

  @attr("date")
  declare modifiedAt?: Date;

  // If async is switched to false, these have to be EmberArrays, not DS.PromiseManyArrays.
  // EmberArray is imported from "@ember/array";

  @hasMany("entryProperty")
  declare entryProperty: DS.PromiseManyArray<EntryProperty>;

  @hasMany("entry")
  declare entry: DS.PromiseManyArray<Entry>;

  @hasMany("contributor")
  declare contributor: DS.PromiseManyArray<Contributor>;

  @hasMany("flag")
  declare flag: DS.PromiseManyArray<Flag>;
}
