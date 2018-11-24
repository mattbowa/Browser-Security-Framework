$j = jQuery.noConflict();

/**
 * Some useful dom functions
 */

let dom = {
	
	/**
	 * Inject script from a remote server
	 * @param: {string} url: the location of the file
	 */	
	loadScript: function(url) {
	  var s = document.createElement('script');
	  s.type = 'text/javascript';
	  s.src = url;
	  $j('body').append(s);
	},
	

	/**
	 * Get the location of the current page.
	 * @return: the location.
	 */
	getLocation: function() {
		return document.location.href;
	},
	
	
	/**
	 * Get links of the current page.
	 * @return: array of URLs.
	 */
	getLinks: function() {
		var linksarray = [];
		var links = document.links;
		for(var i = 0; i<links.length; i++) {
			linksarray = linksarray.concat(links[i].href)		
		};
		return linksarray
	},
	
	
	/**
	 * Rewrites all links matched by selector to url, also rebinds the click method to simply return true
	 * @param: {String} url: the url to be rewritten
	 * @param: {String} selector: the jquery selector statement to use, defaults to all a tags.
	 * @return: {Number} the amount of links found in the DOM and rewritten.
	 */
	rewriteLinks: function(url, selector) {
		var sel = (selector == null) ? 'a' : selector;
		return $j(sel).each(function() {
			if ($j(this).attr('href') != null)
			{
				$j(this).attr('href', url).click(function() { return true; });
			}
		}).length;
	},
	
	
	/** simple function that change the background color
	 * @param: {string} color: the color to change to
	 */
	changeBackgroundColor: function(color){
	    var changeTo = color;
	    document.body.style.backgroundColor = changeTo;
    }
	
};