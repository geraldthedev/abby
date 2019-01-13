document.body.onload = rowMaker;

function rowMaker(){
var name = document.createElement("div");
var text = document.createTextNode("Text loaded");

name.appendChild('text');
}


