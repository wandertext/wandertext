# Components by Route

This document describes the Wandertext routes with the Figma designs and
imagines the component/route tree.

- <Nav>:
  * (header with logo, but not navbar)
    (each item)
      <menu.Item>
      * <Icon>
      </menu.Item>
    (/each)
  * (footer w/ copyright info)
  </Nav>

- application route:

  - {{ outlet }}

- / (index):
    <Header>
      <Nav/>
    </Header>
    <content>
    <Footer/>
- /texts :
  - <Header>:
    * <Icon>
  - <List>:
    - <Entity::Header> (text): (<li>)
      - <IconBar>:
        - <Icon>
      - <Map>:
        - <Map::Marker>
  - <FAB>:
    - <Icon>
- /texts/text:

  - <Header>:
    * <Icon>
  - <Entity>: (<article>)
    - <Entity::Header> (text): (<header>)
      - <IconBar>:
        - <Icon>
    - <Entity::Content> (<section>):
      - (text)
      - (links)
      - <Table>
  - <FAB>:
    - <Icon>

- /texts/text/map:
  - <Header>:
    * <Icon>
  - <Map>:
    - <Map::Marker>
- /texts/text/entries/new:

  - <Header>:
    * <Icon>
  - <Form>:
    * <Input>
    * <Input::Place>
    * <Input::Numeric>
    * <Textarea>
    * <Button>
    * <AutoCompleteBox>

- /texts/text/entries/new/map-search:

  - <Header>:
    * <Icon>
  - <Map>:
    - <Map::Marker>
  - <FAB>:
    - <Icon>

- /places/new:

  - <Header>:
    * <Icon>
  - <Form>:
    * <Input::Search>
    * <SearchResults>:
      * <Table>
    * <Map>:
      * <Map::Marker>
    * <Input>
    * <Input::Numeric>
    * <Textarea>
    * <Button>

    - /texts/:text_id/entries/new
    - /texts/:text_id/contributors
    - /texts/:text_id/delete

  - /places:
    - /places/new
    - /places/:place_id:
      - /places/:place_id/entries
      - /places/:place_id/contributors
      - /places/:place_id/delete
  - /entries:
    - /entries/:entry_id:
      - /entries/:entry_id/contributors
      - /entries/:entry_id/delete
  - /contributors:
    - /contributors/new
    - /contributors/:contributor_id:
      - /contributors/:contributor_id/texts
      - /contributors/:contributor_id/entries
      - /contributors/:contributor_id/places
  - /visualizations
  - /about
  - /documentation
  - /credits
  - /privacy
