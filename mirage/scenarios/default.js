export default function(server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  const muziejus = server.create("contributor", {
    username: "muziejus",
    admin: true
  });
  server.createList("text", 3, { contributors: [muziejus] }).forEach(text => {
    server.createList("entry", 60, { contributors: [muziejus], text });
  });
}
