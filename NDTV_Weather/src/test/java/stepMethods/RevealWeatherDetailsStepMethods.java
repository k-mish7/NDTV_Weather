package stepMethods;

import org.testng.Assert;

import helpers.SeleniumCustomMethods;

public class RevealWeatherDetailsStepMethods extends SeleniumCustomMethods {

	public void revealWeatherDetails(String city) {
		clickElement(getElement("verifyCityKanpur"));
		waitForVisibilityOfElementExplicitly("verifyWeatherDetails", 1);
		Assert.assertEquals(getTextOfElement(getElement("verifyWeatherDetails")), "Kanpur, Uttar Pradesh");
	}
	
}
