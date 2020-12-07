package stepDefinition;

import cucumber.api.java.en.Then;
import helpers.SeleniumCustomMethods;
import stepMethods.RevealWeatherDetailsStepMethods;

public class RevealWeatherDetailsStepDefinition extends SeleniumCustomMethods {
	
	RevealWeatherDetailsStepMethods revealWeatherDetailsStepMethods = new RevealWeatherDetailsStepMethods();

	@Then("^user verifies that selecting particular \"([^\"]*)\" reveals the weather details$")
	public void userVerifiesThatSelectingParticularRevealsTheWeatherDetails(String city) throws Throwable {
		revealWeatherDetailsStepMethods.revealWeatherDetails(city);
	}

}
