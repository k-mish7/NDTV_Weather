Feature: Get Weather Details from API

  @Test
  Scenario Outline: Fetch weather details from API
    Given user launches the API with "<City>"

    Examples: 
      | City   |
      | Kanpur |
