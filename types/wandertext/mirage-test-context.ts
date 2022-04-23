import { type TestContext } from "@ember/test-helpers";
import { Server } from "miragejs";

export default interface MirageTestContext extends TestContext {
  server: Server;
}
