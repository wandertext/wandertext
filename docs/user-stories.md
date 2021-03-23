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
  * I can see the history of changes made to the entry
    * so that I can see how our understanding of the entry has changed
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
  * I can see the history of changes made to the entry
    * so that I can see how our understanding of the entry has changed
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

#### /places/:place_id/delete

* As an editor:
  * I can delete a place
    * so that I can remove data we no longer wish to share


## /entries:
 
* As an editor:
  * I can see all the entries at once
    * so that I can edit them en masse or quickly
  * I can visit subroutes
    * so that I can edit a specific entry outside of the context of its
      enclosing text.

### /entries/:entry_id:

* As a collaborator:
  * I can see detailed information about a specific entry
    * so that I can learn more about the entry
  * I can see the history of changes made to the entry
    * so that I can see how our understanding of the entry has changed
  * I can flag information about the entry that is wrong
    * so that errors made by collaborators can be corrected.
  * I can make changes to the properties of an entry
    * so that the entry can reflect any changes to our knowledge
      of the entry.
  * I can continue to the delete entry route
    * so that I can delete the entry

#### /entries/:entry_id/delete

* As an editor:
  * I can delete an entry
    * so that I can remove data we no longer wish to share

## /contributors:

* As a visitor:
  * I can see a list of all of the contributors
    * so that I can understand how many people have contributed to this
      project.
* As an editor:
  * I can continue to the new contributor route
    * so that I can create a new contributor.

### /contributors/new
 
* As an editor:
  * I can create a new contributor
    * So that the contributor can begin adding to Wandertext.

### /contributors/:contributor_id:
 
* As a visitor:
  * I can see detailed information about a specific contributor
    * so that I can learn more about the contributor and how they contributed
      to Wandertext.
* As the collaborator whose page this is 
  * I can request a new set of login credentials
    * so that I can continue using Wandertext if I forgot my password
  * I can continue to the edit route
    * so that I can change my publicly displayed information
* As an editor:
  * I can continue to the edit route
    * so that I can change the [collaborator’s displayed information]
  * I can continue to the delete route
    * so that I can delete the collaborator

#### /contributors/:contributor_id/edit

* As the contributor whose page this is
  * I can edit my publicly shared [collaborator’s displayed information]
    * So that I can exercise control over how Wandertext represents me
  * I can disable my account
    * So that it’s clear I am no longer contributing to Wandertext

#### /contributors/:contributor_id/texts

* As a visitor:
  * I can see what texts the contributor has worked on
    * so that I can understand their involvement better
* As an editor:
  * I can add or remove access to specific texts for the contributor
    * so that they can continue using Wandertext or not

#### /contributors/:contributor_id/entries
 
* As the contributor whose page this is:
  * I can see all of my entries
    * so that I can quickly edit them en masse

#### /contributors/:contributor_id/places

* As the contributor whose page this is:
  * I can see all of my places
    * so that I can quickly edit them en masse

## /visualizations

<!--
This whole section is candy. 
Let’s worry about what kinds of visualizations 
we’ll have once we have data.
-->

## /about

* As a visitor
  * I can read the About page
    * So that I learn about what Wandertext is all about

## /documentation

* As a contributor
  * I can read the documentation page
    * So that I learn about contributing to Wandertext

## /credits

* As a visitor
  * I can read the Credits page
    * So that I learn about all the contributors who participated in creating
      Wandertext

## /privacy

* As a visitor
  * I can read the Privacy page
    * So that I learn about how Wandertext manages the privacy of the
      contributors.
 
[collaborator’s displayed information]: Information about the collaborator
that is displayed to the public. This includes:
  * Name (as displayed in bibliography)
  * ORCID
  * Social media links
  * Avatar (maybe randomly generated tile of a map?)
  * Avatar geo bounds (so we know where to get the random tile)
 

