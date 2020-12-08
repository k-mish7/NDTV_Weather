Feature: Get Weather Details from API

  @Phase2
  Scenario Outline: Fetch weather details from API
    Given user launches the API with "<City>"

    Examples: 
      | City   |
      | Kanpur |
      |Amritsar|
