

//loadContentScriptInAllTabs();

chrome.runtime.onStartup.addListener(function() {
  var data = RetrieveFromLocalStorage();
	//showLinks(data);
});


