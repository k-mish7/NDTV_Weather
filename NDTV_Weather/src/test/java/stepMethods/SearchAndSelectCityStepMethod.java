package stepMethods;

import org.testng.Assert;

import helpers.SeleniumCustomMethods;

public class SearchAndSelectCityStepMethod extends SeleniumCustomMethods {

	public void searchSelectCity(String city) {
		clearText(getElement("searchBox"));
		typeText(getElement("searchBox"), city);
		waitForVisibilityOfElementExplicitly("cityKanpur", 1);
		clickElement(getElement("cityKanpur"));
		waitForVisibilityOfElementExplicitly("verifyCityKanpur", 1);
		Assert.assertEquals(getTextOfElement(getElement("verifyCityKanpur")), "Kanpur");
	}
}
