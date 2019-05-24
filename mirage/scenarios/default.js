export default function(server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  const muziejus = server.create("contributor", {
    username: "muziejus",
    admin: true
  });
  const text = server.create("text", {
    id: 1,
    name: "Baburnama",
    slug: "baburnama-1530",
    markdownName: "_Bāburnāma_",
    markdownBlurb: "markdown blurb for _Bāburnāma_",
    contributors: [muziejus]
  });
  // Server.createList("entry", 20, { contributors: [muziejus], text });
  server.create("entry", {
    id: 1,
    properties: {
      page: 1,
      sequence: 1
    },
    attestedName: "place 1",
    text
  });
  server.create("entry", {
    id: 2,
    properties: {
      page: 1,
      sequence: 2
    },
    attestedName: "place 2",
    text
  });

  // Server.createList("text", 3, { contributors: [muziejus] }).forEach(text => {
  //   server.createList("entry", 30, { contributors: [muziejus], text });
  // });
}
