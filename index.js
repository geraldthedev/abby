document.body.onload = rowMaker, rowMaker;

function rowMaker(){
var name1 = document.createElement("div");
var text1 = document.createTextNode("Text loaded");

name1.appendChild(text1);

var node1 = document.getElementById("div1");

document.body.insertBefore(name1, node1);
}


