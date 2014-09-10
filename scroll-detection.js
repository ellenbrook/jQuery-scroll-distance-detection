//##############################################################
// Written by Eric Eric Ellenbrook
// 
// http://github.com/ellenbrook/jQuery-scroll-distance-detection
// http://ericellenbrook.com
//
// Feel free to make this better. Fork it on Github.
//
//##############################################################

$.fn.detectScrollDistance = function(targetPercentage, callback){
	
	var self = this;
	
	$(window).scroll(function(){
		var scrollTo = $(window).scrollTop(),
		docHeight = $(document).height(),
		windowHeight = $(window).height();
		scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
		scrollPercent = scrollPercent.toFixed(1);
		
		var navBarHeight = $(this).height();
		
		if(typeof callback == 'function')
		{
			callback(scrollPercent);
		}
		
		if(scrollPercent > targetPercentage) {
			self.css({ top: '0' });
		}
		
		if(scrollPercent < targetPercentage) {
			self.css({ top: '-'+navBarHeight+'px' });
		}
		
	});
	
	return self;
	
};

$(document).ready(function(){
	
	$('#navigation').detectScrollDistance(70, function(scrollPercent){
		$('#percentageCounter h1').text(scrollPercent+"%");
	});
	
});