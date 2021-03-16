# User Stories

This document describes the user experience at every route in Wandertext.

## /index

* As a visitor:
  * I can read the Wandertext tagline
    * so that I can understand what Wandertext is about
  * I can visit subroutes
    * so that I can understand what data is available in Wandertext
    * so that I can visualize what data Wandertext offers
* As a contributor:
  * I can log in
    * so that I can access the creating and editing features of Wandertext.

## /texts:

* As a visitor:
  * I can see all the available texts in the database, with some summary
  statistics regarding the entries, places, and contributors
    * so that I can get a sense of the scope of text’s data within the context
      of what is captured for Wandertext.
* As an editor:
  * I can continue to the new text route
    * so that I can create a new text.

### /texts/new

* As an editor:
  * I can create a new text
    * So that it can start amassing entries

### /texts/:text_id:

* As a visitor:
  * I can see detailed information about a specific text
    * so that I can learn more about the text and understand the data
      associated with it
  * I can see quick visualizations about the text
    * so that I can derive a general sense of the geography of the text as
      well as its narrative/timeline/etc. process
  * I can see a snapshot of the entries associated with the text
    * so that I can get a taste of the top places mentioned
    * so that I can see what places begin or end the text, etc.
* As a collaborator on the text:
  * I can continue to the new entry route
    * so that I can create a new entry for the text.
* As an editor:
  * I can make changes to the properties of the text
  * I can add and remove collaborators from the text
    * so that the text can reflect any changes to the team or to our knowledge
      of the text.
  * I can continue to the delete text route
    * so that I can delete the text

#### /texts/:text_id/entries

* As a visitor:
  * I can see all the entries associated with a text
    * so that I can see the full breadth of the data available
  * I can download the entries associated with the text
    * so that I can use them in my own research
* As a collaborator on the text:
  * I can quickly make changes to many entries at once
    * so that editing an entry doesn’t involve going to a new route,
      necessarily?
  * I can continue to the new entry route
    * so that I can create a new entry for the text.

#### /texts/:text_id/entries/new

* As a collaborator on the text:
  * I can add a new entry
    * so that I add to the knowledge base of the text
  * I can associate the entry with a place
    * so that I can meet the requirement that an entry have a place
  * I can *add a new place*
    * so that I don’t have to leave the new entry space if I need to create a
      new place for my current entry
  * I can see and quickly edit the previous entry
    * so that I can quickly correct an error or transfer information from a
      previous entry

#### /texts/:text_id/contributors

* As a visitor:
  * I can see the list of contributors
    * so that I can see who participating in capturing the data

#### /texts/:text_id/delete

* As an editor:
  * I can delete a text
    * so that I can remove data we no longer wish to share

## /places:
 
* As a visitor:
  * I can see all the available places in the database, with some summary
  statistics regarding the entries, texts, and contributors
    * so that I can get a sense of the scope of text’s data within the context
      of what is captured for Wandertext.
* As an editor:
  * I can continue to the new place route
    * so that I can create a new place.

### /places/new
 
* As a collaborator:
  * I can create a new place
    * So that it can be used by other collaborators as they add entries.

### /places/:place_id:

* As a visitor:
  * I can see detailed information about a specific place
    * so that I can learn more about the place and understand the entries and
      texts associated with it
  * I can see the place on a map
    * so that I can derive a general sense of the geography of the place 
  * I can see a snapshot of the entries associated with the place
    * so that I can get a taste of where the place is mentioned
  * I can flag information about the place that is wrong
    * so that errors made by collaborators can be corrected.
* As a collaborator:
  * I can make changes to the properties of the place
    * so that the place can reflect any changes to our knowledge
      of the place.
  * I can continue to the delete place route
    * so that I can delete the place

#### /places/:place_id/entries

* As a visitor:
  * I can see all the entries associated with a place
    * so that I can see the full breadth of the data available

#### /places/:place_id/contributors
 
* As a visitor:
  * I can see the list of contributors
    * so that I can see who participating in capturing the data

#### /places/:place_id/delete

* As an editor:
  * I can delete a place
    * so that I can remove data we no longer wish to share


## /entries:
### /entries/:entry_id:
#### /entries/:entry_id/contributors
#### /entries/:entry_id/delete
## /contributors:
### /contributors/new
### /contributors/:contributor_id:
#### /contributors/:contributor_id/texts
#### /contributors/:contributor_id/entries
#### /contributors/:contributor_id/places
## /visualizations
## /about
## /documentation
## /credits
## /privacy
 
