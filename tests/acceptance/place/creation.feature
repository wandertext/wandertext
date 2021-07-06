@ignore 
@setupApplicationTest
Feature: place creation

  Scenario: creators can create places

    Given I am a creator
    When I visit the list of places
    And I press the "Create a Place" button
    And I type in [Place] as the name
    And I press the "Submit" button
    Then I should see a place with the name [Place]

  Examples:
    
    -------------
    |Place      |
    |New Bedford|
    |Nantucket  |
    -------------
