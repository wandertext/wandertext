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
  server.create("entry", {
    id: 1,
    properties: {
      page: 3,
      sequence: 2
    },
    attestedName: "Agra",
    text
  });
  server.create("entry", {
    id: 2,
    properties: {
      page: 1,
      sequence: 3
    },
    attestedName: "Belarus",
    text
  });
  server.create("entry", {
    id: 3,
    properties: {
      page: 2,
      sequence: 1
    },
    attestedName: "Chile",
    text
  });
}
