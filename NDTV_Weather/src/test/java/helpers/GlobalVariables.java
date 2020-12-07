package helpers;

import org.apache.commons.collections4.MultiMap;
import org.apache.commons.collections4.map.MultiValueMap;

public class GlobalVariables {

	public static String _webBrowser;
	public static String _baseUrl;
	public static String _weatherURL;
	public static String _sourceAPI;
	public static String _APIKey = "7fe67bf08c80ded756e598d6f8fedaea";
	public static MultiMap<String, Double> _mapAPI = new MultiValueMap<String, Double>();
	public static MultiMap<String, Double> _mapUI = new MultiValueMap<String, Double>();
}
