package helpers;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class InitializeDrivers {

	public static Properties envConfig = null, runConfig = null;
	public static WebDriver driver = null;

	public void LoadConfigProperty() throws IOException {
		envConfig = new Properties();
		FileInputStream ip1 = new FileInputStream(
				System.getProperty("user.dir") + "//resources//config//envConfig.properties");
		envConfig.load(ip1);
		runConfig = new Properties();
		FileInputStream ip2 = new FileInputStream(
				System.getProperty("user.dir") + "//resources//config//runConfig.properties");
		runConfig.load(ip2);
		GlobalVariables._webBrowser = TextFileUtility
				.returnConfigPropertyValue(System.getProperty("user.dir") + envConfig.getProperty("webBrowser"));
	}

	public void openBrowser() throws Exception {

		if (GlobalVariables._webBrowser.equalsIgnoreCase("firefox")) {
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
		} else if (GlobalVariables._webBrowser.equalsIgnoreCase("chrome")) {
			WebDriverManager.chromedriver().setup();
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--incognito");
			options.addArguments("--disable-popup-blocking");
			driver = new ChromeDriver(options);
		} else if (GlobalVariables._webBrowser.equalsIgnoreCase("ie")) {
			WebDriverManager.iedriver().setup();
			driver = new InternetExplorerDriver();
		}
	}

}
