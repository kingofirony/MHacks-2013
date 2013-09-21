function save(concepts){
    var texts = loadText();
    var relevances = loadRelevance();
    if (texts == null){
	texts = [];
    }
    if (relevances == null){
	relevances = [];
    }
    for(var x = 0; x < concepts.length; x++)
    {
	texts[texts.length] = concepts[x].text;
	relevances[texts.length-1] = concepts[x].relevance;
    }
    localStorage["text"]=texts;
    console.log (relevances);
    localStorage["relevance"] = relevances;
}

function loadText(){
    if(localStorage["text"]){
	return localStorage["text"].split(',');
    }
    else{
	return null;
    }
}


function loadRelevance(){
    if(localStorage["relevance"]){
	return localStorage["relevance"].split(',');
    }
    else{
	return null;
    }
}

function generateConcepts(){
    var Concepts = []
    var Texts = loadText();
    var Relevance = loadRelevance();
    if (Relevance && Texts){
	for (var i = 0; i < Texts.length; i++){
	    Concepts.push(new Concept(Texts[i],Relevance[i]));
	}
    }
    return Concepts;
}

function testCall(){
    var concepttest = [new Concept('test',1),new Concept('hi',2)]
    save(concepttest);
}
