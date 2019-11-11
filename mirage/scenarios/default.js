import { random } from "faker";

export default function(server) {
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
  const muziejus = server.create("contributor", {
    id: "muziejus",
    firstName: "Moacir",
    admin: true
  });
  const text = server.create("text", {
    id: "baburnama-1530",
    name: "Baburnama",
    markdownName: "_Bāburnāma_",
    markdownBlurb: "markdown blurb for _Bāburnāma_",
    imgSrc: "https://i.imgur.com/CQtyfDR.png",
    imgCredit: "Internet Archive",
    imgHref: "https://archive.org/details/dli.bengal.10689.18150/page/n5",
    url: "https://archive.org/details/dli.bengal.10689.18150/page/n5",
    year: 1530,
    contributors: [muziejus],
    entryProperties: [
      {
        name: "page",
        type: "number",
        help: "thee page number",
        inputLabel: "Page",
        readOnly: false,
        owner: "admin",
        nullable: true
      },
      {
        name: "sequence",
        type: "number",
        inputLabel: "Seq.",
        readOnly: false,
        owner: "admin",
        nullable: true
      },
      {
        name: "special",
        type: "string",
        help: "something special",
        readOnly: false,
        inputLabel: "Speciale",
        owner: "muziejus",
        nullable: true
      },
      {
        name: "tree",
        type: "string",
        help: "A Tree",
        readOnly: false,
        inputLabel: "Treee",
        owner: "muziejus",
        nullable: true
      }
    ]
  });
  server.create("entry", {
    id: random.uuid(),
    properties: {
      page: 3,
      sequence: 2,
      special: "Agra specialty"
    },
    attestedName: "Agra",
    place: agra,
    text
  });
  server.create("entry", {
    id: random.uuid(),
    properties: {
      page: 1,
      sequence: 3,
      special: "Belarusian specialty"
    },
    attestedName: "Беларусь",
    place: belarus,
    text
  });
  server.create("entry", {
    id: random.uuid(),
    properties: {
      page: 2,
      sequence: 1,
      special: "Chile chili"
    },
    attestedName: "Chile",
    place: chile,
    text
  });
}
