
function initUIEvents() {
	var isMobile = ( /(android|ipad|iphone|ipod)/i.test(navigator.userAgent) );
	var press = isMobile ? 'touchstart' : 'mousedown';
	
	$('button#openwifi').on(press, function(){
		if(window.plugins && window.plugins.WifiAdmin) {
			var wf = window.plugins.WifiAdmin;
			wf.enableWifi(true);
		}
	});

	$('button#closewifi').on(press, function(){
		if(window.plugins && window.plugins.WifiAdmin) {
			var wf = window.plugins.WifiAdmin;
			wf.enableWifi(false);
		}
	});

	function ipIntToString(ip) {
		var str = "";
		for(var i=0; i<4; i++) {
			str += ip % 256;
			ip = Math.floor(ip / 256);
			if(i < 3) str += '.';
		}
		return str;
	}
	
	$('button#scanwifi').on(press, function(){
		console.log('button#scanwifi');
		
		if(window.plugins && window.plugins.WifiAdmin) {
			var wf = window.plugins.WifiAdmin;
			wf.getWifiInfo(function(data){
				console.log( JSON.stringify(data) );
				
				var wifiConnected = data['activity'];
				var wifiList = data['available'];
				
				var html = "";
				if(wifiConnected != null) {
					html += "Connected to:<br/>" +
						"SSID: " + wifiConnected['SSID'] + "<br/>" +
						"BSSID: " + wifiConnected['BSSID'] + "<br/>" + 
						"Mac Addr: " + wifiConnected['MacAddress'] + "<br/>" + 
						"IP: " + ipIntToString( wifiConnected['IpAddress'] ) + "<br/>" +
						"Speed: " + wifiConnected['LinkSpeed'] + " Mbps<br/>"; 
				} else {
					html += "Not connected.<br/>";
				}
				
				html += "<br/>Available Wifi:<br/>";
				while(wifiList.length >0) {
					var item = wifiList.shift();
					html += item['SSID'] + '(' + item['level'] + 'dB, feq:' + (item['frequency']/1000.0).toFixed(2) + 'GHz)';
					if(item['BSSID'] === wifiConnected['BSSID']) html += '(*)';
					html += '<br/>';
				}
				$('div#wifilist').html( html );
				
			}, function(){});
		}
	});

	$('button#connectwifi').on(press, function(){
	});

	$('button#disconnectwifi').on(press, function(){
	});
}

function main() {
	initUIEvents();

}
