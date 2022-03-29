import { Server } from "miragejs";

export default function seedDevServer(server: Server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  server.createList("text", 10);
  server.createList("place", 10);
}
