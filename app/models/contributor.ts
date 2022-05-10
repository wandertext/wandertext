import Model, { attr, hasMany, AsyncHasMany } from "@ember-data/model";
import type Entry from "wandertext/models/entry";
import type Place from "wandertext/models/place";
import type Flag from "wandertext/models/flag";
import type Text from "wandertext/models/text";

declare module "ember-data/types/registries/model" {
  export default interface ModelRegistry {
    contributor: ContributorModel;
  }
}

export default class ContributorModel extends Model {
  // Unclear what the authentication attr is
  @attr declare authentication?: string;

  @attr declare firstName?: string;

  @attr declare lastName?: string;

  @attr({ defaultValue: false }) declare enabled: boolean;

  @attr({ defaultValue: false }) declare editor: boolean;

  @attr({ defaultValue: false }) declare admin: boolean;

  @attr({
    defaultValue() {
      return new Date().toISOString();
    },
  })
  declare createdAt: string;

  @attr() declare modifiedAt?: string;

  @hasMany("entry") declare entries: AsyncHasMany<Entry>;

  @hasMany("place") declare places: AsyncHasMany<Place>;

  @hasMany("flag") declare flags: AsyncHasMany<Flag>;

  @hasMany("text") declare texts: AsyncHasMany<Text>;

  get name() {
    if (this.firstName && this.lastName) {
      return `${this.firstName} ${this.lastName}`;
    } else if (this.firstName) {
      return this.firstName;
    }

    return "No name";
  }
}
