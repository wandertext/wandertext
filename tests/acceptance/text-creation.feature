@setupApplicationTest
Feature: text creation

  Scenario: creators can create texts

    Given I am a creator
    When I visit the list of texts
    # And I press the "Create a Text" button
    # And I type in "Moby-Dick" as the title
    # And I press the "Submit" button
    Then I should create a text
