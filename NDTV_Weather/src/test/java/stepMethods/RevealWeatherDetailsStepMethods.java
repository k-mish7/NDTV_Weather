package stepMethods;

import org.testng.Assert;

import helpers.GlobalVariables;
import helpers.SeleniumCustomMethods;

public class RevealWeatherDetailsStepMethods extends SeleniumCustomMethods {

	public void revealWeatherDetails(String city) {
		clickElement(getElement("verifyCity", city));
		//waitForVisibilityOfElementExplicitly("verifyWeatherDetails", city, 2);
		waitForElementToBeClickable("verifyWeatherDetails", city, 2);
		System.out.println(
				getTextOfElement(getElement("verifyWeatherDetails", city)).toLowerCase().contains(city.toLowerCase()));
		Assert.assertTrue(
				getTextOfElement(getElement("verifyWeatherDetails", city)).toLowerCase().contains(city.toLowerCase()));
		String tempCelsius = getTextOfElement(getElement("tempDegreesUI"));
		String tempFahrenheit = getTextOfElement(getElement("tempFahrenheitUI"));
		double tempDegreesCelsius = Double.valueOf(tempCelsius.split(":")[1].trim());
		double tempDegreesFahrenheit = Double.valueOf(tempFahrenheit.split(":")[1].trim());
		GlobalVariables._mapUI.put(city, tempDegreesCelsius);
		System.out.println(GlobalVariables._mapUI);
	}

}
