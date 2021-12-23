import Model, { attr, hasMany, AsyncHasMany } from "@ember-data/model";
import Entry from "wandertext/models/entry";
import Place from "wandertext/models/place";
import Flag from "wandertext/models/flag";
import Text from "wandertext/models/text";

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

  @attr("boolean", { defaultValue: false }) declare enabled: boolean;

  @attr("boolean", { defaultValue: false }) declare editor: boolean;

  @attr("boolean", { defaultValue: false }) declare admin: boolean;

  @attr("date", {
    defaultValue() {
      return new Date();
    },
  })
  declare createdAt: Date;

  @attr("date") declare modifiedAt?: Date;

  @hasMany("entry") declare entry: AsyncHasMany<Entry>;

  @hasMany("place") declare place: AsyncHasMany<Place>;

  @hasMany("flag") declare flag: AsyncHasMany<Flag>;

  @hasMany("text") declare text: AsyncHasMany<Text>;
}
