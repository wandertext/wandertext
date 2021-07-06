@ignore 
@setupApplicationTest
Feature: list entries

  Scenario: There are entries

    Given a place New Beford
    And 10 entries for the place New Bedford
    When I visit the New Bedford place page
    Then I should see all 10 entries
