package main;

import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import helpers.GlobalVariables;
import helpers.InitializeDrivers;
import helpers.TextFileUtility;

@CucumberOptions(strict = true, monochrome = true, features = "resources/features", glue = "stepDefinition", plugin = {
		"pretty", "html:target/cucumber", "json:target/cucumber.json" }, tags = { "@Test" }, dryRun = false)

public class CucumberRunner extends AbstractTestNGCucumberTests {

	public static Properties envConfig = null, runConfig = null;
	public static WebDriver driver = null;
	public static InitializeDrivers id;

	@BeforeSuite(alwaysRun = true)
	public void setUp() throws Exception {
		initiateSetup();
	}

	@AfterSuite(alwaysRun = true)
	public void quit() throws IOException {
		if (driver != null) {
			driver.quit();
		}
	}

	public void initiateSetup() throws Exception {
		id = new InitializeDrivers();
		id.LoadConfigProperty();
		initConfig();
		initVariables();
	}

	private void initConfig() {
		runConfig = InitializeDrivers.runConfig;
		envConfig = InitializeDrivers.envConfig;
	}

	private void initVariables() {
		String userDirectory = System.getProperty("user.dir");
		GlobalVariables._baseUrl = TextFileUtility
				.returnConfigPropertyValue(userDirectory + envConfig.getProperty("envUrl"));
		GlobalVariables._weatherURL = TextFileUtility
				.returnConfigPropertyValue(userDirectory + envConfig.getProperty("WeatherURL"));
		GlobalVariables._sourceAPI = TextFileUtility
				.returnConfigPropertyValue(userDirectory + envConfig.getProperty("sourceAPI"));
	}

	public void setEnv() throws Exception {
		id.openBrowser();
		driver = InitializeDrivers.driver;
		driver.navigate().to(GlobalVariables._baseUrl.trim());
		maximizeWindow();
	}

	private void maximizeWindow() {
		driver.manage().window().maximize();
	}

}
