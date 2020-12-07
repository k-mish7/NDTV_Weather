Feature: Get Weather Details

  @Test1
  Scenario Outline: Pin city and fetch weather details
    Given user opens NDTV website
    #And user reach the weather section of the website
    #And user searches and selects any "<City>" with temperature information

    Examples: 
      | City   |
      | Kanpur |
