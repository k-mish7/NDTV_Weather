package helpers;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;

public class ObjectMap {
	Properties objectRepository;

	public ObjectMap() {
		objectRepository = new Properties();
		try {
			FileInputStream fis = new FileInputStream(
					System.getProperty("user.dir") + "//resources//objectRepository//objectRepository.properties");
			objectRepository.load(fis);
			fis.close();
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}
	}

	public By getLocator(String strElement) throws Exception {

		String locator = objectRepository.getProperty(strElement);

		String locatorType = locator.split(">")[0];
		String locatorValue = locator.split(">")[1];

		return returnLocator(strElement, locatorType, locatorValue);
	}

	public By getLocator(String strElement, String replace) throws Exception {

		String locator = objectRepository.getProperty(strElement);

		String locatorType = locator.split(">")[0];
		String locatorValue = locator.split(">")[1].replace("replaceAttribute", replace);

		return returnLocator(strElement, locatorType, locatorValue);
	}

	public By returnLocator(String strElement, String locatorType, String locatorValue) {

		System.out.println("Retrieving element '" + strElement + "' with type '" + locatorType + "' and value '"
				+ locatorValue + "' from the object repository");

		By locator;

		switch (locatorType.toLowerCase()) {
		case "id":
			locator = By.id(locatorValue);
			break;
		case "name":
			locator = By.name(locatorValue);
			break;
		case "classname":
			locator = By.className(locatorValue);
			break;
		case "tagname":
			locator = By.tagName(locatorValue);
			break;
		case "linktext":
			locator = By.linkText(locatorValue);
			break;
		case "xpath":
			locator = By.xpath(locatorValue);
			break;
		default:
			locator = null;
		}
		return locator;
	}
}
