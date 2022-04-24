import { type TestContext } from "@ember/test-helpers";
import { Server } from "miragejs";
import PlaceModel from "wandertext/models/place";
import TextModel from "wandertext/models/text";

export default interface MirageTestContext extends TestContext {
  server: Server;
  model: PlaceModel | TextModel | PlaceModel[] | TextModel[];
}
