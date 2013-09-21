var currentUrl = window.location ;

getJsonResponseForURL(currentUrl);

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	console.log(response.farewell);
    });

   
function goBackOnePage(){
    history.go(-1);
}

