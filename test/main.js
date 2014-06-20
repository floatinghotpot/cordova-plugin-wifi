
function initUIEvents() {
	var isMobile = ( /(android|ipad|iphone|ipod)/i.test(navigator.userAgent) );
	var press = isMobile ? 'touchstart' : 'mousedown';
	
	$('button#openwifi').on(press, function(){
		
	});
}

function main() {
	initUIEvents();
	
	
}
