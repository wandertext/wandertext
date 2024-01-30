import Model, { attr, hasMany, AsyncHasMany } from "@ember-data/model";
import type Text from "wandertext/models/text";

declare module "ember-data/types/registries/model" {
  export default interface ModelRegistry {
    entryProperty: EntryPropertyModel;
  }
}

export default class EntryPropertyModel extends Model {
  @attr declare name?: string;

  @attr declare type?: string;

  @attr declare help?: string;

  @attr declare inputLabel?: string;

  @attr declare owner?: string;

  @attr({ defaultValue: true }) declare nullable: boolean;

  @hasMany("text", { async: true }) declare text: AsyncHasMany<Text>;
}
