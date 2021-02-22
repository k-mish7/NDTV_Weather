$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Phase1.feature");
formatter.feature({
  "line": 1,
  "name": "Get Weather Details from UI",
  "description": "",
  "id": "get-weather-details-from-ui",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Pin city and fetch weather details",
  "description": "",
  "id": "get-weather-details-from-ui;pin-city-and-fetch-weather-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Phase1"
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
  "line": 10,
  "name": "",
  "description": "",
  "id": "get-weather-details-from-ui;pin-city-and-fetch-weather-details;",
  "rows": [
    {
      "cells": [
        "City"
      ],
      "line": 11,
      "id": "get-weather-details-from-ui;pin-city-and-fetch-weather-details;;1"
    },
    {
      "cells": [
        "Amritsar"
      ],
      "line": 12,
      "id": "get-weather-details-from-ui;pin-city-and-fetch-weather-details;;2"
    },
    {
      "cells": [
        "Bhubaneswar"
      ],
      "line": 13,
      "id": "get-weather-details-from-ui;pin-city-and-fetch-weather-details;;3"
    },
    {
      "cells": [
        "Jaipur"
      ],
      "line": 14,
      "id": "get-weather-details-from-ui;pin-city-and-fetch-weather-details;;4"
    },
    {
      "cells": [
        "Kanpur"
      ],
      "line": 15,
      "id": "get-weather-details-from-ui;pin-city-and-fetch-weather-details;;5"
    },
    {
      "cells": [
        "Pune"
      ],
      "line": 16,
      "id": "get-weather-details-from-ui;pin-city-and-fetch-weather-details;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3214600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Pin city and fetch weather details",
  "description": "",
  "id": "get-weather-details-from-ui;pin-city-and-fetch-weather-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Phase1"
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
  "name": "user searches and selects any \"Amritsar\" with temperature information",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user verifies that selecting particular \"Amritsar\" reveals the weather details",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LaunchURLStepDefinition.userLaunchBrowser()"
});
formatter.result({
  "duration": 21336499100,
  "status": "passed"
});
formatter.match({
  "location": "LaunchURLStepDefinition.userReachTheWeatherSectionOfTheWebsite()"
});
formatter.result({
  "duration": 3577573200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amritsar",
      "offset": 31
    }
  ],
  "location": "SearchAndSelectCityStepDefinition.userSearchesAndSelectsAnyWithTemperatureInformation(String)"
});
formatter.result({
  "duration": 270945700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amritsar",
      "offset": 41
    }
  ],
  "location": "RevealWeatherDetailsStepDefinition.userVerifiesThatSelectingParticularRevealsTheWeatherDetails(String)"
});
formatter.result({
  "duration": 945216700,
  "status": "passed"
});
formatter.after({
  "duration": 845328000,
  "status": "passed"
});
formatter.before({
  "duration": 380600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Pin city and fetch weather details",
  "description": "",
  "id": "get-weather-details-from-ui;pin-city-and-fetch-weather-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Phase1"
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
  "name": "user searches and selects any \"Bhubaneswar\" with temperature information",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user verifies that selecting particular \"Bhubaneswar\" reveals the weather details",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LaunchURLStepDefinition.userLaunchBrowser()"
});
formatter.result({
  "duration": 20272525000,
  "status": "passed"
});
formatter.match({
  "location": "LaunchURLStepDefinition.userReachTheWeatherSectionOfTheWebsite()"
});
formatter.result({
  "duration": 838578300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bhubaneswar",
      "offset": 31
    }
  ],
  "location": "SearchAndSelectCityStepDefinition.userSearchesAndSelectsAnyWithTemperatureInformation(String)"
});
formatter.result({
  "duration": 322443700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bhubaneswar",
      "offset": 41
    }
  ],
  "location": "RevealWeatherDetailsStepDefinition.userVerifiesThatSelectingParticularRevealsTheWeatherDetails(String)"
});
formatter.result({
  "duration": 252533500,
  "status": "passed"
});
formatter.after({
  "duration": 777638100,
  "status": "passed"
});
formatter.before({
  "duration": 1442100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Pin city and fetch weather details",
  "description": "",
  "id": "get-weather-details-from-ui;pin-city-and-fetch-weather-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Phase1"
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
  "name": "user searches and selects any \"Jaipur\" with temperature information",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user verifies that selecting particular \"Jaipur\" reveals the weather details",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LaunchURLStepDefinition.userLaunchBrowser()"
});
formatter.result({
  "duration": 19993089000,
  "status": "passed"
});
formatter.match({
  "location": "LaunchURLStepDefinition.userReachTheWeatherSectionOfTheWebsite()"
});
formatter.result({
  "duration": 835447400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaipur",
      "offset": 31
    }
  ],
  "location": "SearchAndSelectCityStepDefinition.userSearchesAndSelectsAnyWithTemperatureInformation(String)"
});
formatter.result({
  "duration": 294812900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaipur",
      "offset": 41
    }
  ],
  "location": "RevealWeatherDetailsStepDefinition.userVerifiesThatSelectingParticularRevealsTheWeatherDetails(String)"
});
formatter.result({
  "duration": 208728300,
  "status": "passed"
});
formatter.after({
  "duration": 796192300,
  "status": "passed"
});
formatter.before({
  "duration": 1429000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Pin city and fetch weather details",
  "description": "",
  "id": "get-weather-details-from-ui;pin-city-and-fetch-weather-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Phase1"
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
  "duration": 30090691500,
  "status": "passed"
});
formatter.match({
  "location": "LaunchURLStepDefinition.userReachTheWeatherSectionOfTheWebsite()"
});
formatter.result({
  "duration": 704427400,
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
  "duration": 339195900,
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
  "duration": 229102900,
  "status": "passed"
});
formatter.after({
  "duration": 803633600,
  "status": "passed"
});
formatter.before({
  "duration": 420900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Pin city and fetch weather details",
  "description": "",
  "id": "get-weather-details-from-ui;pin-city-and-fetch-weather-details;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Phase1"
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
  "name": "user searches and selects any \"Pune\" with temperature information",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user verifies that selecting particular \"Pune\" reveals the weather details",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LaunchURLStepDefinition.userLaunchBrowser()"
});
formatter.result({
  "duration": 20087151500,
  "status": "passed"
});
formatter.match({
  "location": "LaunchURLStepDefinition.userReachTheWeatherSectionOfTheWebsite()"
});
formatter.result({
  "duration": 976628900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pune",
      "offset": 31
    }
  ],
  "location": "SearchAndSelectCityStepDefinition.userSearchesAndSelectsAnyWithTemperatureInformation(String)"
});
formatter.result({
  "duration": 327560200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pune",
      "offset": 41
    }
  ],
  "location": "RevealWeatherDetailsStepDefinition.userVerifiesThatSelectingParticularRevealsTheWeatherDetails(String)"
});
formatter.result({
  "duration": 208656200,
  "status": "passed"
});
formatter.after({
  "duration": 760171700,
  "status": "passed"
});
formatter.uri("Phase2.feature");
formatter.feature({
  "line": 1,
  "name": "Get Weather Details from API",
  "description": "",
  "id": "get-weather-details-from-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Fetch weather details from API",
  "description": "",
  "id": "get-weather-details-from-api;fetch-weather-details-from-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Phase2"
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
  "id": "get-weather-details-from-api;fetch-weather-details-from-api;",
  "rows": [
    {
      "cells": [
        "City"
      ],
      "line": 8,
      "id": "get-weather-details-from-api;fetch-weather-details-from-api;;1"
    },
    {
      "cells": [
        "Amritsar"
      ],
      "line": 9,
      "id": "get-weather-details-from-api;fetch-weather-details-from-api;;2"
    },
    {
      "cells": [
        "Bhubaneswar"
      ],
      "line": 10,
      "id": "get-weather-details-from-api;fetch-weather-details-from-api;;3"
    },
    {
      "cells": [
        "Jaipur"
      ],
      "line": 11,
      "id": "get-weather-details-from-api;fetch-weather-details-from-api;;4"
    },
    {
      "cells": [
        "Kanpur"
      ],
      "line": 12,
      "id": "get-weather-details-from-api;fetch-weather-details-from-api;;5"
    },
    {
      "cells": [
        "Pune"
      ],
      "line": 13,
      "id": "get-weather-details-from-api;fetch-weather-details-from-api;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1309400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Fetch weather details from API",
  "description": "",
  "id": "get-weather-details-from-api;fetch-weather-details-from-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Phase2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the API with \"Amritsar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Amritsar",
      "offset": 28
    }
  ],
  "location": "APIStepDefinition.userLaunchesTheAPIWith(String)"
});
formatter.result({
  "duration": 2035941600,
  "status": "passed"
});
formatter.after({
  "duration": 37900,
  "status": "passed"
});
formatter.before({
  "duration": 509800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Fetch weather details from API",
  "description": "",
  "id": "get-weather-details-from-api;fetch-weather-details-from-api;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Phase2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the API with \"Bhubaneswar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Bhubaneswar",
      "offset": 28
    }
  ],
  "location": "APIStepDefinition.userLaunchesTheAPIWith(String)"
});
formatter.result({
  "duration": 470039200,
  "status": "passed"
});
formatter.after({
  "duration": 30900,
  "status": "passed"
});
formatter.before({
  "duration": 344300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Fetch weather details from API",
  "description": "",
  "id": "get-weather-details-from-api;fetch-weather-details-from-api;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Phase2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the API with \"Jaipur\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Jaipur",
      "offset": 28
    }
  ],
  "location": "APIStepDefinition.userLaunchesTheAPIWith(String)"
});
formatter.result({
  "duration": 457013500,
  "status": "passed"
});
formatter.after({
  "duration": 48200,
  "status": "passed"
});
formatter.before({
  "duration": 368500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Fetch weather details from API",
  "description": "",
  "id": "get-weather-details-from-api;fetch-weather-details-from-api;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Phase2"
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
  "duration": 489745100,
  "status": "passed"
});
formatter.after({
  "duration": 28800,
  "status": "passed"
});
formatter.before({
  "duration": 301200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Fetch weather details from API",
  "description": "",
  "id": "get-weather-details-from-api;fetch-weather-details-from-api;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Phase2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the API with \"Pune\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Pune",
      "offset": 28
    }
  ],
  "location": "APIStepDefinition.userLaunchesTheAPIWith(String)"
});
formatter.result({
  "duration": 447193800,
  "status": "passed"
});
formatter.after({
  "duration": 40100,
  "status": "passed"
});
formatter.uri("Phase3.feature");
formatter.feature({
  "line": 1,
  "name": "Temperature Comparator",
  "description": "",
  "id": "temperature-comparator",
  "keyword": "Feature"
});
formatter.before({
  "duration": 459400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Compare the temperature result of UI \u0026 API",
  "description": "",
  "id": "temperature-comparator;compare-the-temperature-result-of-ui-\u0026-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Phase3"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user compares the result of API \u0026 UI",
  "keyword": "Given "
});
formatter.match({
  "location": "TemperatureComparatorStepDefinition.userComparesTheResultOfAPIUI()"
});
formatter.result({
  "duration": 692800000,
  "status": "passed"
});
formatter.after({
  "duration": 37800,
  "status": "passed"
});
});