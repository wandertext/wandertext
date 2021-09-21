# Schema

## Contributor

* id: id // username
* SSOID: // for third party auth...
* authentication // ?
* firstName: String
* lastName: String
* enabled: Boolean
* editor: Boolean
* admin: Boolean
* createdAt: DateTime
* modifiedAt: DateTime
* entries: [Entry]
* texts: [Text]
* places: [Place]
* flags: [Flag]

## Entry

* id: id // uuid
* properties: JSON
* attestedName: String // placename in text
* note: String
* createdAt: DateTime
* modifiedAt: DateTime
* contributor: [Contributor]
* text: Text!
* place: Place!
* placeId: String // lazy loaded id?
* flags: [Flag]

## EntryProperty

These properties are text-specific, but apply to entries. Like who is speaking
in the text, or when something was recorded.

* id: id
* name: String // non-unique? name of the property
* type: String // some sort of type--String, etc. Dictionary (controlled
  vocab)
* help: String // help text displayed in tooltip
* inputLabel: String // label for <input> tag
* owner: String // who is in charge of the property. Perh a Contributor
* nullable: Boolean // can this be null?

## Flag 

* id: id //uuid
* comment: String!
* createdAt: DateTime
* modifiedAt: DateTime
* entry: Entry
* place: Place
* text: Text
* creator: Contributor

## Text

* id: id // title, human-readable
* name: String!
* popupTemplate: String // ? for map?
* markdownName: String // for formatting
* markdownBlurb: String // metadata about text
* url: String // some external link
* imgSrc: String
* imgCredit: String
* imgHref: String
* year: Int // birth/appearance
* entryCount: Int // calculated?
* entryProperties: [EntryProperty]
* entrySort: String // sort param passed to DB
* entries: [Entry]
* properties: JSON // ?
* createdAt: DateTime
* modifiedAt: DateTime
* contributors: [Contributor]
* // sortedEntryIds...
* // sortedEntries...
* flags: [Flag]

## Place

* id: id //human readable
* name: String!
* note: String
* source: String
* latitude: Float
* longitude: Float
* geonameId: Int
* confidence: Int
* createdAt: DateTime
* modifiedAt: DateTime
* entries: [Entry]
* contributors: [Contributor]
* flags: [Flag]


