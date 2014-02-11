$(document).ready(function(){
	$(window).scroll(function(){
		
		// Change this to target a different percentage
		var targetPercentage = 80;
		//Change this to set the height of your nav bar so it hides properly
		var navBarHeight = 50;
		//Window Math
		var scrollTo = $(window).scrollTop(),
        docHeight = $(document).height(),
        windowHeight = $(window).height();
       	scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
					console.log(scrollPercent);

							if(scrollPercent > targetPercentage) {
								$("#navigation").css({ top: '0' });
							}
						
							if(scrollPercent < targetPercentage) {
								$("#navigation").css({ top: '-'+navBarHeight+'px' });
							}
						
	}).trigger('scroll');
});