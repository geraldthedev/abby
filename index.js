document.body.onload = inputMaker;


function inputMaker(){
var node1 = document.getElementById("div1");
var name1 = document.createElement("input");
var button = document.createElement("button");

node1.appendChild(name1);
node1.appendChild(button);
button.innerHTML = 'Add';
button.addEventListener("click");


}
