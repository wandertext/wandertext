// import { Server } from "miragejs";

export default function (server /*: Server*/) {
  server.createList("text", 10);
  server.createList("place", 10);
}
