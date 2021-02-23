@setupApplicationTest
Feature: text creation

  Scenario: creators can create texts

    Given I am a creator
    And no text entitled [Title] exists
    When I visit the list of texts
    And I press the "Create a Text" button
    And I type in [Title] as the title
    And I press the "Submit" button
    Then I should see a text with the title [Title]

  Examples:
    
    ------------
    |Title     |
    |Billy Budd|
    |Moby-Dick |
    ------------

  @ignore
  Scenario: texts cannot be created with titles that already exist
    Given I am a creator
    And a text entitled Moby-Dick
    When I visit the list of texts
    And I press the "Create a Text" button
    And I type in "Moby-Dick" as the title
    And I press the "Submit" button
    Then I should receive an error
