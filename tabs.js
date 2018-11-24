
let g_tabs = [];


let chromeTabs = {	
	
	/**
	 * Get links of the current page.
	 * @return: array of URLs.
	 */
    query: function (tabs, then){		
		chrome.tabs.query(tabs, function(tabs) {		
			for (var index in tabs){
				g_tabs.push(tabs[index]);
			}  		
		});			
		then();
	},
	
	
	 /**
	 * Send a message to a tab
	 * @param: {number} tabId: the tab ID
	 * @param: {array} msg: the the message to send
	 */
	sendMessage: function(tabId, msg){
			chrome.tabs.sendMessage(tabId, msg, SendMessageHandler);
	},
	
	
	 /**
	 * Inject a content script
	 * @param: {obj} tab: inject in
	 * @param: {obj} options: 
	 */	
	executeScript: function(tab, options)	{	
	chrome.tabs.executeScript(tab.id, options);
	}
}



function SendMessage (sendTo, msg) 
{				
	chromeTabs.query(sendTo, () => {
		for (let i = 0; i < g_tabs.length; i++) {	
			chromeTabs.sendMessage(g_tabs[i].id, msg);
		}    
	});
}



	 

function Inject(script)
 {		
	chrome.windows.getAll({'populate': true}, function(windows){		
		for (let i = 0; i < windows.length; i++){						
			let tabs = windows[i].tabs;
			for (let j = 0; j < tabs.length; j++){
				chromeTabs.executeScript(tabs[j], {file: script, allFrames: true});
			}
		}
	});	
}	
	

	

function InjectActiveTab(){	
				chrome.windows.getCurrent(function (currentWindow)
				{
					chrome.tabs.query({active: true, windowId: currentWindow.id}, function(tabs)
					{				
						_chromeTabs.executeScript(tabs[0].id, {file: scriptFile, allFrames: true});
					});
				});
			
}



