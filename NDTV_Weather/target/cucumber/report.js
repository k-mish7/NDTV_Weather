$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Phase1.feature");
formatter.feature({
  "line": 1,
  "name": "Get Weather Details",
  "description": "",
  "id": "get-weather-details",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Pin city and fetch weather details",
  "description": "",
  "id": "get-weather-details;pin-city-and-fetch-weather-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user opens NDTV website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user reach the weather section of the website",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user searches and selects any \"\u003cCity\u003e\" with temperature information",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user verifies that selecting particular \"\u003cCity\u003e\" reveals the weather details",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "get-weather-details;pin-city-and-fetch-weather-details;",
  "rows": [
    {
      "cells": [
        "City"
      ],
      "line": 10,
      "id": "get-weather-details;pin-city-and-fetch-weather-details;;1"
    },
    {
      "cells": [
        "Kanpur"
      ],
      "line": 11,
      "id": "get-weather-details;pin-city-and-fetch-weather-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5399300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Pin city and fetch weather details",
  "description": "",
  "id": "get-weather-details;pin-city-and-fetch-weather-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user opens NDTV website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user reach the weather section of the website",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user searches and selects any \"Kanpur\" with temperature information",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user verifies that selecting particular \"Kanpur\" reveals the weather details",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LaunchURLStepDefinition.userLaunchBrowser()"
});
formatter.result({
  "duration": 23184086200,
  "status": "passed"
});
formatter.match({
  "location": "LaunchURLStepDefinition.userReachTheWeatherSectionOfTheWebsite()"
});
formatter.result({
  "duration": 1523326400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kanpur",
      "offset": 31
    }
  ],
  "location": "SearchAndSelectCityStepDefinition.userSearchesAndSelectsAnyWithTemperatureInformation(String)"
});
formatter.result({
  "duration": 414375300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kanpur",
      "offset": 41
    }
  ],
  "location": "RevealWeatherDetailsStepDefinition.userVerifiesThatSelectingParticularRevealsTheWeatherDetails(String)"
});
formatter.result({
  "duration": 92386500,
  "status": "passed"
});
});