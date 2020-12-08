package stepDefinition;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import helpers.SeleniumCustomMethods;

public class CucumberHooks extends SeleniumCustomMethods {

	@Before
	public void startUp(Scenario scenario) {
		System.out.println("------------------------------");
		System.out.println("Running : " + scenario.getName());
		System.out.println("------------------------------");
	}

	@After
	public void tearDown(Scenario scenario) throws Exception {
		System.out.println("------------------------------");
		System.out.println(scenario.getName() + " : " + scenario.getStatus());
		System.out.println("------------------------------");
		driver.quit();
	}
}
