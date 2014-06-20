package org.apache.cordova.plugin;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.net.wifi.ScanResult;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;

public class WifiAdmin extends CordovaPlugin { 
    /** Cordova Actions. */
    private static final String ACTION_GET_WIFI_INFO = "getWifiInfo";
    private static final String ACTION_ENABLE_WIFI = "enableWifi";
    private static final String ACTION_CONNECT_WIFI = "connectWifi";
    private static final String ACTION_ENABLE_WIFI_AP = "enableWifiAP";
    private static final String ACTION_ENABLE_WIFI_LOCK = "enableWifiLock";

    @Override
    public boolean execute(String action, JSONArray inputs, CallbackContext callbackContext) throws JSONException {
        PluginResult result = null;
        if (ACTION_GET_WIFI_INFO.equals(action)) {
            result = executeGetWifiInfo(inputs, callbackContext);
            
        } else if (ACTION_ENABLE_WIFI.equals(action)) {
            result = executeEnableWifi(inputs, callbackContext);
            
        } else if (ACTION_CONNECT_WIFI.equals(action)) {
            result = executeConnectWifi(inputs, callbackContext);
            
        } else if (ACTION_ENABLE_WIFI_AP.equals(action)) {
            result = executeEnableWifiAP(inputs, callbackContext);
            
        } else if (ACTION_ENABLE_WIFI_LOCK.equals(action)) {
            result = executeEnableWifiLock(inputs, callbackContext);
            
        } else {
            Log.d(LOGTAG, String.format("Invalid action passed: %s", action));
            result = new PluginResult(Status.INVALID_ACTION);
        }
        
        if(result != null) callbackContext.sendPluginResult( result );
        
        return true;
    }
    
    private PluginResult executeGetWifiInfo(JSONArray inputs, CallbackContext callbackContext) {
		Context context = cordova.getActivity().getApplicationContext();
		WifiManager wifiManager = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);
		WifiInfo wifiInfo = wifiManager.getConnectionInfo();

		JSONObject obj = new JSONObject();
		try {
			JSONObject activity = new JSONObject();
			activity.put("BSSID", wifiInfo.getBSSID());
			activity.put("HiddenSSID", wifiInfo.getHiddenSSID());
			activity.put("SSID", wifiInfo.getSSID());
			activity.put("MacAddress", wifiInfo.getMacAddress());
			activity.put("IpAddress", wifiInfo.getIpAddress());
			activity.put("NetworkId", wifiInfo.getNetworkId());
			activity.put("RSSI", wifiInfo.getRssi());
			activity.put("LinkSpeed", wifiInfo.getLinkSpeed());
			obj.put("activity", activity); 

			JSONArray available = new JSONArray();
	        for (ScanResult scanResult : wifiManager.getScanResults()) {
	        	JSONObject ap = new JSONObject();
	        	ap.put("BSSID", scanResult.BSSID);
	        	ap.put("SSID", scanResult.SSID);
	        	ap.put("frequency", scanResult.frequency);
	        	ap.put("level", scanResult.level);
	        	//netwrok.put("timestamp", String.valueOf(scanResult.timestamp));
	        	ap.put("capabilities", scanResult.capabilities);
	        	available.put(ap);
	        }
	        obj.put("available", available); 


		} catch (JSONException e) {
			e.printStackTrace();
			callbackContext.error("JSON Exception");
		}
		callbackContext.success(obj);

    	return null;
    }

    private PluginResult executeEnableWifi(JSONArray inputs, CallbackContext callbackContext) {
		Context context = cordova.getActivity().getApplicationContext();
		WifiManager wifiManager = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);
		WifiInfo wifiInfo = wifiManager.getConnectionInfo();

		boolean toEnable = true;
        
    	return null;
    }

    private PluginResult executeConnectWifi(JSONArray inputs, CallbackContext callbackContext) {
    	return null;
    }

    private PluginResult executeEnableWifiAP(JSONArray inputs, CallbackContext callbackContext) {
    	return null;
    }

    private PluginResult executeEnableWifiLock(JSONArray inputs, CallbackContext callbackContext) {
    	return null;
    }
}