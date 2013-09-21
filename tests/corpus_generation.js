
var API_URL_BASE = "http://access.alchemyapi.com/calls/url/URLGetRankedConcepts?apikey=47a57bafe5ba7677644498bbd1c7ed42ecfab976&outputMode=json&url=";

var API_TEXT_BASE = "http://access.alchemyapi.com/calls/text/TextGetRankedConcepts?apikey=47a57bafe5ba7677644498bbd1c7ed42ecfab976&outputMode=json&text=";


var testString ="The statement did not provide details other than accusing unidentified conservatives in South Korea of \"hostility\" towards Pyongyang.North Korea regularly makes such claims about the South.The postponement is an apparent setback after weeks of gradually improving ties between the two countries.The South Korean government has not yet responded to the announcement.Relations reached a low point earlier this year when the North cut a military hotline to the South in March. That followed its third nuclear test in February, which triggered international sanctions."



function Concept(text,relevance){
    this.text=text;
    this.relevance=relevance;
}

function getArrayOfConceptsForText(text){

    alert(generateAPICallFromText(text));
    $.getJSON(generateAPICallFromText(text),function(data){
	    alert(data);});

}

function generateAPICallFromUrl(url){
    return API_URL_BASE + url;
}

function generateAPICallFromText(text){
    return API_TEXT_BASE +"\""+ text + "\"";
}