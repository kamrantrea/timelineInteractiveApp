$(document).ready(function(){
	
	'use strict';
	
	// get vars from url
	var scripts = document.getElementsByTagName('script');
	var div;
	
	for(var i = 0, len = scripts.length; i < len; i++)
	{
	  var src = scripts[i].getAttribute('src').split('?');
	  var arg = src[1];
	
	  if(!arg) {continue;}
	  
	  //alert(div);
	  div = arg;
	}
	
	// scale for editing on smaller screen
	function updateScale()
	{
		var baseSize = { w: 1920, h: 1080 };
		var ww = $(window).width();
		var wh = $(window).height();
		var newScale = 1;
		
		// compare ratios
		if(ww/wh < baseSize.w/baseSize.h)
		{ // tall ratio
			newScale = ww / baseSize.w;
		}
		else
		{ // wide ratio
			newScale = wh / baseSize.h;        
		}
		
		$(div).css('transform', 'scale(' + newScale + ',' +  newScale + ')');
	}
	
	$(window).load(updateScale).resize(updateScale);

});