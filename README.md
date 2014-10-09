Version
=======
2.0

jQuery Scroll Detection
-----------

jQuery Scroll Detection is a simple plugin that allows you to do *something* when your user scrolls to a specific depth into your webpage. Some useful ideas might include:

  - Showing a navigation menu to stop users from scrolling back to the top to navigate away from the page.
  - Sliding in social media buttons when a user reaches the end of an article.
  - Fading in a "back to top" icon when users reach the bottom of your page.
  - Just about anything else you might think of.

As  you can see there are plenty of uses for this so it's up to you to be creative on as to how you can use it. The possibilities are endless.


How to use
-----------

It's incredibly easy to use. Simply downloaded [jQuery Scroll Detection](https://github.com/ellenbrook/jQuery-scroll-distance-detection/archive/master.zip) and include it after you include jQuery.

```sh
	<script src="path/to/jquery.js"></script>
	<script src="path/to/jquery-scroll-detection.js"></script>
</body>
```

Once you've got that complete, the rest is easy. Simply include the script and add the settings you'd like and it just works. 

The example below has testMode turned on, activates when the page is scrolled 40%, acts on a target with an id of #leftPosition with a width of 500px and it will slide in front the left.


```sh
	<script src="path/to/jquery.js"></script>
	<script src="path/to/jquery-scroll-detection.js"></script>
	<script>
	$(document).ready( function() {
    	$(window).detectScroll({
    		testMode: true,
    		targetPercent: 40,
    		position: "left",
    		target: "#leftPosition"
    		width: 500,
    	});
	});
	</script>
</body>
```
###Default settings
jQuery Scroll Detection can take a number of settings when initialized. Below is a list of the settings and their options or what they contro.
* **position** - The position in which the action will be taking place. Fade means it will fade in or out. Accepts "*top", "right", "bottom", "left", "fade"*. 
* **target** - The *ID* of the container you wish to modify upon page scroll.
* **testMode** - Turning on will display the percentage scrolled. Turning off will hide it. Accepts: *true* or *false*. 
* **targetPercentage** - This is the percentage in which the plugin will activate. Accepts: integer *1* to *100*.
* **objectHeight** - This is the height of the object being modified. It is only necessary to define this setting if your **position** is set to *top* or *bottom*. Accepts: any integer. **do not** add "px" to the end.
* **objectWidth** - This is the width of the object being modified. It is only necessary to define this setting if your **position** is set to *left* or *right*. Accepts any integer. **do not** add "px" to the end.
* **speed** - This is the speed at which you'd like the action to take place in milliseconds. By default it is set to 400ms. The higher the number, the slower the change. 

Questions
--------------
1. **I do not understand how to use it.** - [Here is a page with it in action.](http://ellenbrook.github.io/jquery-scroll-distance-detection/) Does that help clear things up a bit? (Hint: take a look at the source code.)

2. **What is testMode?** - It's just a way to visualize what percentage the page is scrolled. if you set testMode to true it will display a small counter on the bottom right corner of the screen allowing you to visualize exactly what the percentage scrolled is.

Make this better!
--------------
I have no idea what I'm doing. Want to make this better? Submit a pull request and I'll be happy to check it out. 

Or if you have more questions, give me a shout on Twitter ([@_ellenbrook](https://twitter.com/_ellenbrook)) and I'll help you out in any way I can.
License
----
MIT
