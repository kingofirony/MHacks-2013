chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {text:loadText()}, function(response) {
		
	    });
    });

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
		sendResponse({text: loadText()});
    });

chrome.infobars.show({
	tabId: 0,
	    path: url
	    });
