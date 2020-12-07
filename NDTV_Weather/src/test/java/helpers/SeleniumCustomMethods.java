package helpers;

import org.openqa.selenium.ElementClickInterceptedException;
import org.openqa.selenium.WebElement;

import main.CucumberRunner;

public class SeleniumCustomMethods extends CucumberRunner {

	ObjectMap objMap = new ObjectMap();

	public String getTextOfElement(WebElement element) {
		return element.getText();
	}

	public void typeText(WebElement element, String text) {
		element.clear();
		System.out.println("Typing " + text);
		element.sendKeys(text);
	}

	public void clickElement(WebElement element) {
		try {
			element.click();
		} catch (ElementClickInterceptedException e) {
			try {
				System.out.println("Element overlapped, retry clicking in 5s");
				Thread.sleep(5000);
				element.click();
			} catch (Exception e1) {

			}
		}
	}

	public void navigateToPage(String url) {
		driver.navigate().to(url);
	}

	public void clearText(WebElement element) {
		element.clear();
	}

	public WebElement getElement(String elementName) {
		try {
			return driver.findElement(objMap.getLocator(elementName));
		} catch (Exception e) {
			System.out.println("Failed at element :: " + elementName);
			return null;
		}
	}
}
