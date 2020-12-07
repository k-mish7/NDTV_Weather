package stepDefinition;

import cucumber.api.java.en.Given;
import helpers.SeleniumCustomMethods;
import stepMethods.TemperatureComparatorStepMethod;

public class TemperatureComparatorStepDefinition extends SeleniumCustomMethods {

	TemperatureComparatorStepMethod temperatureComparatorStepMethod = new TemperatureComparatorStepMethod();
	
	@Given("^user compares the result of API & UI$")
	public void userComparesTheResultOfAPIUI() throws Throwable {
		temperatureComparatorStepMethod.temperatureComparator();
	}
}
