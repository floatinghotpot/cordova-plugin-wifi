
function initUIEvents() {
	var isMobile = ( /(android|ipad|iphone|ipod)/i.test(navigator.userAgent) );
	var press = isMobile ? 'touchstart' : 'mousedown';
	
	$('button#openwifi').on(press, function(){
	});

	$('button#closewifi').on(press, function(){
	});

	$('button#scanwifi').on(press, function(){
		if(window.plugins && window.plugins.WifiAdmin) {
			var wf = window.plugins.WifiAdmin;
			wf.getWifiInfo(function(data){
				$('div#wifilist').html( data );
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
