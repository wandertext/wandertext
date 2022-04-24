// import { Server } from "miragejs";

export default function (server /*: Server*/) {
  const text = server.create("text", { name: "The First Book" });
  server.createList("text", 9);
  server.createList("place", 10);
  const places = server.schema.places.all();
  server.createList("entry", 10, {
    text,
    place: () => places.models[Math.floor(Math.random() * 10)],
  });
}
