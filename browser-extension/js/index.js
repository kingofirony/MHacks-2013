var i = 1;
var newInput = "<input type=\"text\" id=\"form1\"  class=\"url\" placeholder=\"https://\" style=\"width:400px;\">";

function generateNewInputString(num){
    return "<input type=\"text\" id=\"form" + i + "\"  class=\"url\" placeholder=\"https://\" style=\"width:400px;\">";
}
$(document).ready(function(){
    $("#add_url_button").click(function(){
	    if($("#form" + i).val() == ""){
		alert("Please fill in the previous form before adding new URL's.");
	    }
	    else{
	    i++;
	    $(".navbar-search").append(generateNewInputString(i));} 
	});});
