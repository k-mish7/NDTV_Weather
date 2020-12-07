package stepMethods;

import helpers.GlobalVariables;
import helpers.SeleniumCustomMethods;

public class LaunchURLStepMethod extends SeleniumCustomMethods {

	public void launchBrowser() throws Exception {
		setEnv();
		waitForVisibilityOfElementExplicitly("noThanks", 5);
		clickElement(getElement("noThanks"));
	}

	public void reachWeatherSection() {
		navigateToPage((GlobalVariables._weatherURL.trim()));
	}
}
