
var API_URL_BASE = "http://access.alchemyapi.com/calls/url/URLGetRankedConcepts?apikey=47a57bafe5ba7677644498bbd1c7ed42ecfab976&outputMode=json&url=";

var API_TEXT_BASE = "http://access.alchemyapi.com/calls/text/TextGetRankedConcepts?apikey=47a57bafe5ba7677644498bbd1c7ed42ecfab976&outputMode=json&text=";


var testString ="The statement did not provide details other than accusing unidentified conservatives in South Korea of \"hostility\" towards Pyongyang.North Korea regularly makes such claims about the South.The postponement is an apparent setback after weeks of gradually improving ties between the two countries.The South Korean government has not yet responded to the announcement.Relations reached a low point earlier this year when the North cut a military hotline to the South in March. That followed its third nuclear test in February, which triggered international sanctions."

var arrayOfConcepts = [];

function Concept(text,relevance){
    this.text=text;
    this.relevance=relevance;
}

function getJsonResponseForText(text){
    var json;

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
	json = xhr.responseText;                         
	json = json.replace(/^[^(]*\(([\S\s]+)\);?$/, '$1');
			    var rval = createArrayOfConcepts(json);
			    };

	xhr.open('GET', generateAPICallFromText(text));
	xhr.send();
    }

function getJsonResponseForURL(url){
    var json;

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
	json = xhr.responseText;                         
	json = json.replace(/^[^(]*\(([\S\s]+)\);?$/, '$1');
			    var rval = createArrayOfConcepts(json);
			    };

	xhr.open('GET',generateAPICallFromUrl(url));
	xhr.send();
    }


    function createArrayOfConcepts(json){
	var parsedJson = $.parseJSON(json);

	var text;
	var relevance;

	var arr = [];

	for(var i = 0;i<parsedJson.concepts.length;i++){
	    
	    text = parsedJson.concepts[i].text;
	    relevance = parsedJson.concepts[i].relevance;

	    arr.push(new Concept(text,relevance));
	}
	
	arrayOfConcepts = arr;
	return arr;
    }


    function parseJson(json){
	return jQuery.parseJSON( json );
    }

function generateAPICallFromUrl(url){
    return API_URL_BASE + url;
}

function generateAPICallFromText(text){
    return API_TEXT_BASE +"\""+ text + "\"";
}