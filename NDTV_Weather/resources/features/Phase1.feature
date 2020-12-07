Feature: Get Weather Details from UI

  @Test
  Scenario Outline: Pin city and fetch weather details
    Given user opens NDTV website
    And user reach the weather section of the website
    And user searches and selects any "<City>" with temperature information
    Then user verifies that selecting particular "<City>" reveals the weather details

    Examples: 
      | City   |
      | Kanpur |
