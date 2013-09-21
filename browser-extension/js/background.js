chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
		console.log(response.farewell);
	    });
    });

chrome.runtime.onMessage.addListener(
			

);

chrome.infobars.show({
	tabId: 0,
	    path: url
	    });
