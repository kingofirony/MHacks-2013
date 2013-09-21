var save = function(concepts){
    for(x = 0;x<concepts.length;x++)
    {
	saveSingleConcept(concepts[x]);
	console.log(concepts[x]);
    }
}


var loadText = function(){
    return chrome.storage.local.get('text',function(){});
}

var loadRelevance = function(){
    return chrome.storage.local.get('relevance',function(){});
}




var saveSingleConcept = function(concept){
    if (chrome.storage.local.get('text',function(){}) == null){
	chrome.storage.local.set({'text' : Array(concept.text)});
    }
    else{
	x = chrome.storage.local.get('text',function(){});
	x.push(concept.text);
	chrome.storage.local.set({'text':x});
    }
    if (chrome.storage.local.get('relevance',function(){}) == null){
	chrome.storage.local.set({'relevance':Array(concept.relevance)});
    }
    else{
	x = chrome.storage.local.get('relevance',function(){});
	x.push(concept.relevance);
	chrome.storage.local.set({'relevance':x});
    }
}