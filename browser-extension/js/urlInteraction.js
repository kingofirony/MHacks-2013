var websites = [];

function returnHTMLCode(url){
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
	y = xhr.responseText;
	websites.push(y);
    };
    xhr.open('GET', url);
    xhr.send();
}


function makeParagraphs(text){
    var x = text;
    x = x.split('<p>');
    for (var i = 0; i < x.length; i++){
	x[i].substring(x[i].indexOf('<p>'),x[i].indexOf('</p>'));
	while(x[i].indexOf('<')!=-1){
	    if (x[i].indexOf('>')!=-1){
		x[i] = x[i].substring(0,x[i].indexOf('<')) + x[i].substring(x[i].indexOf('<')+1,x[i].indexOf('>')) + x[i].substring(x[i].indexOf('>')+1);}
	    else{
		x[i] =x.substring(0,x[i].indexOf('<')) + x.substring(x[i].indexOf('<')+1);}
	}
    }
    return x;
}