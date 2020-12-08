package stepMethods;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.file.Paths;
import java.util.ArrayList;

import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import helpers.GlobalVariables;
import helpers.SeleniumCustomMethods;

public class TemperatureComparatorStepMethod extends SeleniumCustomMethods {

	public void temperatureComparator() {
		ArrayList<String> keySet = new ArrayList<String>();
		ArrayList<Double> varianceSet = new ArrayList<Double>();

		for (String key : GlobalVariables._mapAPI.keySet()) {
			keySet.add(key);
		}

		for (int i = 0; i < GlobalVariables._mapAPI.size(); i++) {
			System.out.println("Variance in temperature for city " + keySet.get(i) + " is " + (Math
					.abs(GlobalVariables._mapAPI.get(keySet.get(i)) - GlobalVariables._mapUI.get(keySet.get(i)))));
			varianceSet.add(
					Math.abs(GlobalVariables._mapAPI.get(keySet.get(i)) - GlobalVariables._mapUI.get(keySet.get(i))));
		}

		updateStatusInExcel(keySet, varianceSet);
	}

	public static void updateStatusInExcel(ArrayList<String> cities, ArrayList<Double> variance) {
		String sampleFilepath = System.getProperty("user.dir") + "//resources//dataFiles//City_Temp.xlsx";
		File sampleFile = Paths.get(sampleFilepath).toFile();
		try {
			FileInputStream inputStream = new FileInputStream(sampleFile);
			XSSFWorkbook wb = new XSSFWorkbook(inputStream);
			Sheet citySheet = wb.getSheet("City_Temp");
			for (int i = 0; i < cities.size(); i++) {
				citySheet.createRow(i + 1).createCell(0).setCellValue(cities.get(i));
				citySheet.getRow(i + 1).createCell(1).setCellValue(variance.get(i));
				if (variance.get(i) > 2.0) {
					citySheet.getRow(i + 1).createCell(2).setCellValue("Failed");
				} else {
					citySheet.getRow(i + 1).createCell(2).setCellValue("Passed");
				}
			}
			FileOutputStream fo = new FileOutputStream(sampleFile);
			wb.write(fo);
			wb.close();
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
	}
}
