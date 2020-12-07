package stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import helpers.SeleniumCustomMethods;
import stepMethods.LaunchURLStepMethod;

public class LaunchURLStepDefinition extends SeleniumCustomMethods {

	LaunchURLStepMethod launchURLStepMethod = new LaunchURLStepMethod();

	@Given("^user opens NDTV website$")
	public void userLaunchBrowser() throws Throwable {
		launchURLStepMethod.launchBrowser();
	}

	@And("^user reach the weather section of the website$")
	public void userReachTheWeatherSectionOfTheWebsite() throws Throwable {
		launchURLStepMethod.reachWeatherSection();
	}

}
