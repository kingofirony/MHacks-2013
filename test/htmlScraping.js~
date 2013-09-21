var returnAllText = function(){
    var allText = String(document.body.textContent);
    return removeSpaces(allText);
}

var removeSpaces = function(text){
    var x = text;
    x = x.replace(/(\r\n|\n|\r)/gm,"");
    x = x.replace(/\t+/g," ");
    x.trim();
    x = x.replace('  ', ' ');
    return x;
}
