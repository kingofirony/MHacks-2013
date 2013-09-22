var i = 1;
var newInput = "<input type=\"text\" id=\"form1\"  class=\"url\" placeholder=\"https://\" style=\"width:400px;\">";
var urlList = [];
function generateNewInputString(num){
    return "<input type=\"text\" id=\"form" + i + "\"  class=\"url\" placeholder=\"https://\" style=\"width:400px;\">";
}
$(document).ready(function(){
    $("#start_button").click(function(){
		    for(var i = 1;i<$("input").length+1;i++){
			urlList.push($("#form" + i).val());
		    }
		    appendToCorpus();

		    setTimeout(function(){window.close()},5000); 
		});	


$("#add_url_button").click(function(){
		if($("#form" + i).val() == ""){
		    alert("Please fill in the previous form before adding new URL's.");
		}
		else{
		    i++;
		    $(".navbar-search").append(generateNewInputString(i));} 
    });});


function appendToCorpus(){
    
    for(var i = 0;i<urlList.length;i++){
	getJsonResponseForURLForCorpus(urlList[i])
	    }
}
