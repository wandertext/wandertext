import Route from "@ember/routing/route";

export default class TextsIndexRoute extends Route {
  model() {
    return [
      {
        id: 1,
        name: "Bāburnāma",
        slug: "baburnama-1530",
        entrySort: "folio"
      },
      {
        id: 2,
        name: "Nightwood",
        slug: "nightwood-1530",
        entrySort: "page"
      },
      {
        id: 3,
        name: "Language and Cultural Atlas of Ashkenazic Jewry",
        slug: "lcaaj",
        entrySort: "informant"
      }
    ];
  }
}
