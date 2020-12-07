Feature: Get Weather Details

  @Test2
  Scenario Outline: Pin city and fetch weather details
    Given user launches the API with "<City>"

    Examples: 
      | City   |
      | Kanpur |
