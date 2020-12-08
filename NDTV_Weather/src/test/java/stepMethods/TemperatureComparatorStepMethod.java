package stepMethods;

import java.util.ArrayList;

import helpers.GlobalVariables;
import helpers.SeleniumCustomMethods;

public class TemperatureComparatorStepMethod extends SeleniumCustomMethods {

	public void temperatureComparator() {
		ArrayList<String> keySet = new ArrayList<String>();
		for (String key : GlobalVariables._mapAPI.keySet()) {
			keySet.add(key);
		}

		for (int i = 0; i < GlobalVariables._mapAPI.size(); i++) {
			System.out.println("Variance in temperature for city " + keySet.get(i) + " is " + (Math
					.abs(GlobalVariables._mapAPI.get(keySet.get(i)) - GlobalVariables._mapUI.get(keySet.get(i)))));
		}
	}
}
