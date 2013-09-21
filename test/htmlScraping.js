var returnAllText = function(){
    var allText = document.getElementsByTagName('p');

    return removeSpaces(listToString(allText));
}

var listToString = function(array){
    var s = "";
    for (x = 0; x<array.length;x++){
	s = s + array[x].innerText;
    }
    return s;
}

var removeSpaces = function(text){
    var x = text;
    x = x.replace(/(\r\n|\n|\r)/gm," ");
    x = x.replace(/\t+/g," ");
    x = x.replace(/[^a-zA-Z0-9]/g,"");
    x.trim();
    return x;
}
