export default function(server) {
  const muziejus = server.create("contributor", {
    id: "muziejus",
    firstName: "Moacir",
    admin: true
  });

  const page = server.create("entryProperty", {
    name: "page",
    type: "number",
    help: "thee page number",
    inputLabel: "Page"
  });
  const sequence = server.create("entryProperty", {
    id: "sequence",
    name: "sequence",
    type: "number",
    inputLabel: "Seq."
  });
  const special = server.create("entryProperty", {
    id: "special",
    name: "special",
    help: "something special",
    inputLabel: "Speciale"
  });
  const tree = server.create("entryProperty", {
    id: "tree",
    name: "tree",
    help: "A Tree",
    inputLabel: "Treee"
  });

  const babur = server.create("text", {
    id: "baburnama-1530",
    name: "Baburnama",
    slug: "baburnama-1530",
    markdownBlurb: "fixture markdown blurb for baburnama",
    markdownName: "_Bāburnāma_",
    imgSrc: "https://i.imgur.com/CQtyfDR.png",
    imgCredit: "Internet Archive",
    imgHref: "https://archive.org/details/dli.bengal.10689.18150/page/n5",
    url: "https://archive.org/details/dli.bengal.10689.18150/page/n5",
    year: 1530,
    contributors: [muziejus],
    entryProperties: [page, sequence, special, tree]
  });
  const agra = server.create("place", {
    id: "agra",
    latitude: 27.18,
    longitude: 78.02,
    name: "آگرہ",
    geonameId: 1279259
  });
  const belarus = server.create("place", {
    id: "belarus",
    latitude: 52,
    longitude: 27,
    name: "Belarus",
    geonameId: 630336
  });
  const chile = server.create("place", {
    id: "chile",
    latitude: -30,
    longitude: -71,
    name: "Chile",
    geonameId: 3895114
  });
  server.create("entry", {
    properties: {
      page: 3,
      sequence: 2,
      special: "Agra specialty"
    },
    attestedName: "Agra",
    place: agra,
    contributors: [muziejus],
    text: babur
  });
  server.create("entry", {
    properties: {
      page: 1,
      sequence: 3,
      special: "Belarusian specialty"
    },
    attestedName: "Беларусь",
    place: belarus,
    contributors: [muziejus],
    text: babur
  });
  server.create("entry", {
    properties: {
      page: 2,
      sequence: 1,
      special: "Chile chili"
    },
    attestedName: "Chile",
    place: chile,
    contributors: [muziejus],
    text: babur
  });
}
