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

  @attr() declare latitude?: number;

  @attr() declare longitude?: number;

  @attr() declare geonameId?: number;

  @attr() declare confidence?: number;

  @attr({
    defaultValue() {
      return new Date().toISOString();
    },
  })
  declare createdAt: string;

  @attr() declare modifiedAt?: string;

  @hasMany("entry", { async: true })
  declare entries: AsyncHasMany<Entry>;

  @hasMany("contributor", { async: true })
  declare contributors: AsyncHasMany<Contributor>;

  @hasMany("flag", { async: true })
  declare flags: AsyncHasMany<Flag>;
}
