package helpers;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.Properties;

public class TextFileUtility {

	private static BufferedReader br;

	public static String returnConfigPropertyValue(Properties config, String propertyName) {
		try {
			File file = new File(config.getProperty(propertyName));
			FileReader fr = new FileReader(file);
			br = new BufferedReader(fr);
			return br.readLine();
		} catch (Exception e) {

		}
		return null;
	}

	public static String returnConfigPropertyValue(String filePath) {
		try {
			File file = new File(filePath);
			FileReader fr = new FileReader(file);
			br = new BufferedReader(fr);
			return br.readLine();
		} catch (Exception e) {

		}
		return null;
	}
}