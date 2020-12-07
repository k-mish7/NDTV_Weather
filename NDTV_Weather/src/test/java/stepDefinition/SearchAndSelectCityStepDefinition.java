package stepDefinition;

import cucumber.api.java.en.And;
import helpers.SeleniumCustomMethods;
import stepMethods.SearchAndSelectCityStepMethod;

public class SearchAndSelectCityStepDefinition extends SeleniumCustomMethods {

	SearchAndSelectCityStepMethod searchAndSelectCityStepMethod = new SearchAndSelectCityStepMethod();

	@And("^user searches and selects any \"([^\"]*)\" with temperature information$")
	public void userSearchesAndSelectsAnyWithTemperatureInformation(String city) throws Throwable {
		searchAndSelectCityStepMethod.searchSelectCity(city);
	}

}
