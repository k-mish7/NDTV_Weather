package stepMethods;

import org.testng.Assert;

import helpers.GlobalVariables;
import helpers.SeleniumCustomMethods;

public class RevealWeatherDetailsStepMethods extends SeleniumCustomMethods {

	public void revealWeatherDetails(String city) {
		clickElement(getElement("verifyCityKanpur"));
		waitForVisibilityOfElementExplicitly("verifyWeatherDetails", 2);
		Assert.assertEquals(getTextOfElement(getElement("verifyWeatherDetails")), "Kanpur, Uttar Pradesh");
		String tempCelsius = getTextOfElement(getElement("tempDegreesUI"));
		String tempFahrenheit = getTextOfElement(getElement("tempFahrenheitUI"));
		double tempDegreesCelsius = Double.valueOf(tempCelsius.split(":")[1].trim());
		double tempDegreesFahrenheit = Double.valueOf(tempFahrenheit.split(":")[1].trim());
		GlobalVariables._mapUI.put(city, tempDegreesCelsius);
		GlobalVariables._mapUI.put(city, tempDegreesFahrenheit);
		System.out.println(GlobalVariables._mapUI);
	}

}
