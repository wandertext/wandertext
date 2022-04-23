import JSONAPISerializer from "@ember-data/serializer/json-api";

export default class Application extends JSONAPISerializer {}

// DO NOT DELETE: this is how TypeScript knows how to look up your serializers.
declare module "ember-data/types/registries/serializer" {
  export default interface SerializerRegistry {
    application: Application;
  }
}
