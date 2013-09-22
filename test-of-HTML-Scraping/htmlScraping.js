var returnAllText = function(){
    var allText = document.getElementsByTagName('p');
    return removeSpaces(listToString(allText)).trim();
}

var listToString = function(array){
    var s = "";
    for (x = 0; x<array.length;x++){
	s = " "+ s + " "+ array[x].innerText;
    }
    return s;
}

var removeSpaces = function(text){
    var x = text;
    x.split('<p>');
    console.log(x);
}
