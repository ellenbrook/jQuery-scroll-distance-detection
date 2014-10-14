(function($) {

    $.fn.detectScroll = function(options) {

    	var settings = $.extend({
            position     : "fade",
            target       : "#targetContainer",
            size         : null,
            testMode     : false,
            targetPercent: 70,
            objectHeight: null,
            objectWidth: null,
            speed: 400
        }, options);


        return this.each( function() 
        {
			var self = this;

	        $( this ).on( 'scroll', function()
	        {
	        	this.scrollTo = $( window ).scrollTop();
				this.docHeight = $( document ).height();
				this.windowHeight = $( window ).height();
				this.scrollPercent = ( scrollTo / ( docHeight-windowHeight ) ) * 100;
				this.scrollPercent = scrollPercent.toFixed( 1 );

				//Do the scroll detection work
				if( this.scrollPercent > settings.targetPercent )
				{
					// Did they want it faded in?
				    if( settings.position == "fade")
				    {
				    	$( settings.target ).fadeIn( settings.speed );
				    }

				    // Did they position it from the top?
				    if( settings.position == "top")
				    {
				    	$( settings.target ).stop().animate( {top: "0"}, settings.speed );
				    }

				    // Did they position it from the right?
				    if( settings.position == "right")
				    {
				    	$( settings.target ).stop().animate( {right: "0"}, settings.speed );
				    }

				    // Did they position it from the bottom?
				    if( settings.position == "bottom")
				    {
				    	$( settings.target ).stop().animate( {bottom: "0"}, settings.speed );
				    }

				    // Did they position it from the left?
				    if( settings.position == "left" )
				    {
				    	$( settings.target ).stop().animate( {left: "0"}, settings.speed );
				    }
				}
			
				if( this.scrollPercent < settings.targetPercent ) 
				{
					// Did they want it faded in?
				    if( settings.position == "fade" )
				    {
				    	$( settings.target ).fadeOut( settings.speed );
				    }

				    // Did they position it from the top?
				    if( settings.position == "top" )
				    {
				    	$( settings.target ).stop().animate( {top: "-"+settings.height+"px"}, settings.speed );
				    }

				    // Did they position it from the right?
				    if( settings.position == "right" )
				    {
				    	$( settings.target ).stop().animate( {right: "-"+settings.width+"px"}, settings.speed );
				    }

				    // Did they position it from the bottom?
				    if( settings.position == "bottom" )
				    {
				    	$( settings.target ).stop().animate( {bottom: "-"+settings.height+"px"}, settings.speed );
				    }

				    // Did they position it from the left?
				    if( settings.position == "left" )
				    {
				    	$( settings.target ).stop().animate( {left: "-"+settings.width+"px"}, settings.speed );
				    }
				}

				// If testMode is on then update the counter in real time
			    if ( settings.testMode ) 
			    {
		        	$( '#detectScrollTestView' ).html( scrollPercent+"%" );
		    	} // testMode

			    return self;

	    	}); // on scrolll

		    // Is testMode on? Better show a percentage counter
		    if ( settings.testMode ) 
		    {
		        $( 'body' ).append( '<div id="detectScrollTestView">Scroll</div>' );
		        $( '#detectScrollTestView' ).css({
		        	position:'fixed',
		        	bottom:'20px',
		        	right:'30px',
		        	background:'rgba(44, 62, 80,.25)',
		        	width: '48px',
		        	height: '48px',
		        	'font-size':'18px',
		        	'line-height': '42px',
		        	'text-align': 'center',
		        	borderRadius: '50%',
		        	padding: '16px',
		        });
	    	} // End of testMode
		});
    }

}(jQuery));
