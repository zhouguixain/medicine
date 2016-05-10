var map = new AMap.Map('container',{
	zoom:10,
	center:[114.068987,22.550651],
});
var marker = new AMap.Marker({
	position:[114.068987,22.550651],
	map:map,
});
var infowindow;
AMap.plugin('AMap.AdvancedInfoWindow',function(){
	infowindow = new AMap.AdvancedInfoWindow({
		content:'<h3>&nbsp;&nbsp;深圳南北药店</h3>',
		placeSearch:true,
		offset:new AMap.Pixel(0,-30),
		asOrigin:true
	});
});
var clickHancle = AMap.event.addListener(marker,'click',function(){
	infowindow.open(map,new AMap.LngLat(114.068987,22.550651));
});
