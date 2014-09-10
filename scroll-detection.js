//##############################################################
// Written by Eric Eric Ellenbrook
// 
// http://github.com/ellenbrook/jQuery-scroll-distance-detection
// http://ericellenbrook.com
//
// Feel free to make this better. Fork it on Github.
//
//##############################################################

/**
 * @param {Object} targetPercentage
 * @param {Object} scrollIn - callback for when the DOM element reaches targetPercentage
 * @param {Object} scrollOut - callback for when the DOM element is no longer at targetPercentage
 * @param {Object} scrollEventCallback - Callback for every time the scroll event is triggered.
 */
$.fn.detectScrollDistance = function(targetPercentage, scrollIn, scrollOut, scrollEventCallback){
	
	var self = this;
	
	$(window).on('scroll', function(){
		var scrollTo = $(window).scrollTop(),
		docHeight = $(document).height(),
		windowHeight = $(window).height();
		scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
		scrollPercent = scrollPercent.toFixed(1);
		
		// Are we there yet?
		if(scrollPercent > targetPercentage)
		{
			if(typeof scrollIn == 'function')
			{
				// We've reached the target
				scrollIn.call(self, scrollPercent);
			}
			else
			{
				// Was a callback function supplied? If not, then this is pointless.. Throw an exception
				throw('You need to supply a callback function to detectScrollDistance');
			}
		}
		
		// Scrolling out of view
		if(scrollPercent < targetPercentage)
		{
			if(typeof scrollOut == 'function')
			{
				scrollOut.call(self, scrollPercent);
			}
		}
		
		// The scroll event fired, call the callback function, if one was supplied.
		if(typeof scrollEventCallback == 'function')
		{
			// Set the context of "this" to self (the object detectScrollDistance was called on ((in the example "this" would refer to #navigation)))
			// If we don't do .call(self), "this" will refer to the window object in the callback function.
			scrollEventCallback.call(self, scrollPercent);
		}
		
	});
	
	return self;
	
};

