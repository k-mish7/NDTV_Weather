package stepMethods;

import helpers.GlobalVariables;
import helpers.SeleniumCustomMethods;

public class LaunchURLStepMethod extends SeleniumCustomMethods {

	public void launchBrowser() throws Exception {
		setEnv();
		clickElement(getElement("noThanks"));
	}
}
