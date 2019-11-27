const contributorIds = ["muziejus"];

export default [
  {
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
    contributorIds,
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
  },
  {
    id: "nightwood-1936",
    name: "Nightwood",
    slug: "nightwood-1936",
    markdownBlurb: "fixture markdown blurb for nightwood",
    markdownName: "_Nightwood_",
    contributorIds
  }
];
