import Model, { attr, hasMany, AsyncHasMany } from "@ember-data/model";
import type EntryProperty from "wandertext/models/entry-property";
import type Entry from "wandertext/models/entry";
import type Contributor from "wandertext/models/contributor";
import type Flag from "wandertext/models/flag";

declare module "ember-data/types/registries/model" {
  export default interface ModelRegistry {
    text: TextModel;
  }
}

export default class TextModel extends Model {
  @attr declare name: string;

  @attr declare popupTemplate?: string;

  @attr declare markdownName?: string;

  @attr declare markdownBlurb?: string;

  @attr declare url?: string;

  @attr declare imgSrc?: string;

  @attr declare imgCredit?: string;

  @attr declare imgHref?: string;

  @attr() declare year?: number;

  // @attr declare entryCount?: string;

  @attr declare entrySort?: string;

  @attr declare properties?: string;

  @attr({
    defaultValue() {
      return new Date().toISOString();
    },
  })
  declare createdAt: string;

  @attr() declare modifiedAt?: string;

  @hasMany("entryProperty")
  declare entryProperty: AsyncHasMany<EntryProperty>;

  @hasMany("entry")
  declare entry: AsyncHasMany<Entry>;

  @hasMany("contributor")
  declare contributor: AsyncHasMany<Contributor>;

  @hasMany("flag")
  declare flag: AsyncHasMany<Flag>;
}
