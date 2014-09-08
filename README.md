See it live at: [http://codepen.io/ellenbrook/pen/IHDor](http://codepen.io/ellenbrook/pen/IHDor)

jQuery-scroll-distance-detection
================================

This is a simple script that detects the percentage of the page that scrolls and does *something*. In this case it drops a hidden navigation bar.

All you have to do to make it work for your project is to include scroll-detection.js. Once it is included, you will need to change the following variables in order for it to work. They are:

targetPercentage
----------------
targetPercentage is the percentage of page you'd like the user to scroll to before activing the hidden element.

navBarHeight
-------------
navBarHeight is the height of your navbar plus any boarders, shadows, or any other information that is visible from the outside. For example, a navbar of 50px with a shadow that is 3px lower would be a total of 53px. Simple. :-)

targetID
--------
targetID is the ID of the element that you are choosing to show.


Have a way to make this better? Let me know.
