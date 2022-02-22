import Model, { attr, hasMany, AsyncHasMany } from "@ember-data/model";
import type Entry from "wandertext/models/entry";
import type Contributor from "wandertext/models/contributor";
import type Flag from "wandertext/models/flag";

declare module "ember-data/types/registries/model" {
  export default interface ModelRegistry {
    place: PlaceModel;
  }
}

export default class PlaceModel extends Model {
  @attr declare name: string;

  @attr declare note?: string;

  @attr declare source?: string;

  @attr("number") declare latitude?: number;

  @attr("number") declare longitude?: number;

  @attr("number") declare geonameId?: number;

  @attr("number") declare confidence?: number;

  @attr("date", {
    defaultValue() {
      return new Date();
    },
  })
  declare createdAt: Date;

  @attr("date") declare modifiedAt?: Date;

  @hasMany("entry")
  declare entry: AsyncHasMany<Entry>;

  @hasMany("contributor")
  declare contributor: AsyncHasMany<Contributor>;

  @hasMany("flag")
  declare flag: AsyncHasMany<Flag>;
}
