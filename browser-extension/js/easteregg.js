var counter = 0;
$( document ).ready(function() {
$("p").click(function(){
	counter++;
	if(counter>20){
	    $("p").replaceWith("<center><h1>I'm a Seawolf</h1><br><img src=\"../static/seawolf.jpg\"></img></center>");
	}
    });});