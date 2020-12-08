package stepMethods;

import org.testng.Assert;

import helpers.SeleniumCustomMethods;

public class SearchAndSelectCityStepMethod extends SeleniumCustomMethods {

	public void searchSelectCity(String city) {
		clearText(getElement("searchBox"));
		typeText(getElement("searchBox"), city);
		waitForVisibilityOfElementExplicitly("citySelection", city, 2);
		clickElement(getElement("citySelection", city));
		waitForVisibilityOfElementExplicitly("verifyCity", city, 2);
		Assert.assertEquals(getTextOfElement(getElement("verifyCity", city)), city);
	}
}
