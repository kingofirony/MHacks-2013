var currentUrl = window.location;
var corpus, currentPageCorpus;
var verified = 0;

getJsonResponseForURL(currentUrl);

setTimeout(function(){
	chrome.runtime.sendMessage({request: "sendText"}, function(response) {
		currentPageCorpus=arrayOfConcepts;
		corpus = response.text;
		    verify();

	    });},1000);


function verify(){
    for(var i = 0;i<corpus.length;i++){
	for(var y=0;y<currentPageCorpus.length ;y++){
	    
	    if((corpus[i] + "") == (currentPageCorpus[y].text + ""))
		{
		    verified=true;
	    }
	}
    }

    if(verified ==false){
   window.location = chrome.extension.getURL('/html/badboy.html');
    }
   }

   

