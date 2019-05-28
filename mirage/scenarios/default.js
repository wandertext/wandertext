export default function(server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  const agra = server.create("place", {
    id: 1,
    geometry: {
      coordinates: [78.02, 27.18]
    },
    properties: {
      name: "Agraname"
    }
  });
  const belarus = server.create("place", {
    id: 2,
    geometry: {
      coordinates: [27, 52]
    },
    properties: {
      name: "Belaname"
    }
  });
  const chile = server.create("place", {
    id: 3,
    geometry: {
      coordinates: [-71, -30]
    },
    properties: {
      name: "Chilname"
    }
  });
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
    place: agra,
    text
  });
  server.create("entry", {
    id: 2,
    properties: {
      page: 1,
      sequence: 3
    },
    attestedName: "Belarus",
    place: belarus,
    text
  });
  server.create("entry", {
    id: 3,
    properties: {
      page: 2,
      sequence: 1
    },
    attestedName: "Chile",
    place: chile,
    text
  });
}
