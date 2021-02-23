@setupApplicationTest
Feature: has relationships

  Scenario: An entry has a place

    Given an entry with the id 1
    And a place named New Bedford
    And the entry with the id 1 belongs to the place named New Bedford
    When I visit the page for the entry with the id 1
    Then I should see the place named New Beford as the entry's place

  Scenario: An entry has a text

    Given an entry with the id 1
    And a text entitled Moby-Dick
    And the entry with the id 1 belongs to the text entitled Moby-Dick
    When I visit the page for the entry with the id 1
    Then I should see the text entitled Moby-Dick as the entry's text
