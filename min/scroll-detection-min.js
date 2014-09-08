//##############################################################
// Written by Eric Eric Ellenbrook
// 
// http://github.com/ellenbrook/jQuery-scroll-distance-detection
// http://ericellenbrook.com
//
// Feel free to make this better. Fork it on Github.
//
//##############################################################

(function( $ ) {
$.fn.detectScrollDistance = function( percentage ) {
	var timeIt = debounce(function() {
		$(window).scroll(function(){
			var height = 30;
			distanceCheck(percentage, height);
		}).trigger('scroll');
	}, 550);

	window.addEventListener('scroll', timeIt);
};

var distanceCheck = function(targetPercentage, height) {
	
	windowMath();

	//Check the percentage
	if(scrollPercent > targetPercentage) {
		console.log(scrollPercent);
		$( this ).css({ top: '0' });
	}
	
	if(scrollPercent < targetPercentage) {
		$( this ).css({ top: '-'+height+'px' });
		console.log(scrollPercent+" "+targetPercent);
	}
}

var windowMath = function() {
	var scrollTo = $(window).scrollTop(),
	docHeight = $(document).height(),
	windowHeight = $(window).height();
	scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
	scrollPercent = scrollPercent.toFixed(1);

	return scrollPercent;
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};
}( jQuery ));