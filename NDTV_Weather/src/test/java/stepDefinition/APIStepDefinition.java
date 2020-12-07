package stepDefinition;

import cucumber.api.java.en.Given;
import helpers.SeleniumCustomMethods;
import stepMethods.APIStepMethods;

public class APIStepDefinition extends SeleniumCustomMethods {
	
	APIStepMethods apiStepMethods = new APIStepMethods();
	
	@Given("^user launches the API with \"([^\"]*)\"$")
	public void userLaunchesTheAPIWith(String city) throws Throwable {
		apiStepMethods.launchAPI(city);
	}

}
