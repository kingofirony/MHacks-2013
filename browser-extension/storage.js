var save = function(concepts){
    for(x = 0;x<concepts.length;x++)
    {
	saveSingleConcept(concepts[x]);
    }
}


var loadText = function(){
    return chrome.storage.local.get('text');
}

var loadRelevance = function(){
    return chrome.storage.local.get('relevance');
}




var saveSingleConcept = function(concept){
    currentText = loadText();
    currentRelevance =loadRelevance;
    if (currentText == null){
	chrome.storage.set({'text':[concept.text]});
    }
    else{
	chrome.storage.set({'text':currentText.push(concept.text)});
    }
    if (currentRelevance == null){
	chrome.storage.set({'relevance':[concept.relevance]});
    }
    else{
	chrome.storage.set({'relevance':currentText.push(concept.relevance)});
    }
}