/* eslint  import/no-anonymous-default-export: off */
export default function (server) {
  server.create("text", { title: "Typee" });
  server.create("text", { title: "Omoo" });

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  // server.createList('post', 10);
}
