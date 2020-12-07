$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Phase2.feature");
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
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the API with \"\u003cCity\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "get-weather-details;pin-city-and-fetch-weather-details;",
  "rows": [
    {
      "cells": [
        "City"
      ],
      "line": 8,
      "id": "get-weather-details;pin-city-and-fetch-weather-details;;1"
    },
    {
      "cells": [
        "Kanpur"
      ],
      "line": 9,
      "id": "get-weather-details;pin-city-and-fetch-weather-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Pin city and fetch weather details",
  "description": "",
  "id": "get-weather-details;pin-city-and-fetch-weather-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the API with \"Kanpur\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Kanpur",
      "offset": 28
    }
  ],
  "location": "APIStepDefinition.userLaunchesTheAPIWith(String)"
});
formatter.result({
  "duration": 1916237100,
  "error_message": "java.lang.AssertionError: expected [200] but found [401]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:496)\r\n\tat org.testng.Assert.assertEquals(Assert.java:125)\r\n\tat org.testng.Assert.assertEquals(Assert.java:372)\r\n\tat org.testng.Assert.assertEquals(Assert.java:382)\r\n\tat stepMethods.APIStepMethods.launchAPI(APIStepMethods.java:21)\r\n\tat stepDefinition.APIStepDefinition.userLaunchesTheAPIWith(APIStepDefinition.java:13)\r\n\tat ✽.Given user launches the API with \"Kanpur\"(Phase2.feature:5)\r\n",
  "status": "failed"
});
});