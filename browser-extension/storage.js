function save(concepts){
    for(x = 0;x<concepts.length;x++)
    {
	saveSingleConcept(concepts[x]);
    }
}

function loadText(){
    var text;
    chrome.storage.local.get('text',function(items){
	text = items;
    });
    return text;
}

function loadRelevance(){
    var relevance;
    chrome.storage.local.get('relevance',function(items){
	relevance = items;
    });
    return relevance;
}




var saveSingleConcept = function(concept){
    var text = loadText();
    var relevance = loadRelevance();
    if (text != null){
	text.push(concept.text);
	chrome.storage.local.set({'text':text});
    }
    else{
	chrome.storage.local.set({'text':[concept.text]});
    }
    if (relevance != null){
	relevance.push(concept.relevance);
	chrome.storage.local.set({'relevance':relevance});
    }
    else{
	chrome.storage.local.set({'relevance':[concept.relevance]});
    }
}
