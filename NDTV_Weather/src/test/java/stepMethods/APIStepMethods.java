package stepMethods;

import org.testng.Assert;

import helpers.GlobalVariables;
import helpers.SeleniumCustomMethods;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class APIStepMethods extends SeleniumCustomMethods {

	RequestSpecification request;

	public void launchAPI(String city) {
		RestAssured.baseURI = GlobalVariables._sourceAPI.replaceAll("_city", city).replaceAll("_APIKey",
				GlobalVariables._APIKey);
		request = RestAssured.given().contentType("application/json\r\n");
		request.queryParam("q", city);
		request.queryParam("appid", GlobalVariables._APIKey);
		Response response = request.get();
		Assert.assertEquals(response.getStatusCode(), 200);
		System.out.println(response.asString());
		String tempValue = response.jsonPath().get("main.temp").toString();
		double tempKelvin = Double.valueOf(tempValue);
		double tempCelsius = tempKelvin - 273.15;
		double tempFahrenheit = (tempCelsius * 9 / 5) + 32;
		GlobalVariables._mapAPI.put(city, tempCelsius);
		System.out.println(GlobalVariables._mapAPI);
	}
}
