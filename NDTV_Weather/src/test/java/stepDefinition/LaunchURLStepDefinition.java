package stepDefinition;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import helpers.SeleniumCustomMethods;
import stepMethods.LaunchURLStepMethod;

public class LaunchURLStepDefinition extends SeleniumCustomMethods {

	LaunchURLStepMethod launchURLStepMethod = new LaunchURLStepMethod();
	Scenario scenario;

	@Before
	public void before(Scenario scenario) {
		this.scenario = scenario;
	}

	@Given("^user opens NDTV website$")
	public void userLaunchBrowser() throws Throwable {
		launchURLStepMethod.launchBrowser();
	}

}
