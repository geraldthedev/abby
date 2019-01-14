document.body.onload = inputMaker;


function inputMaker(){
var node1 = document.getElementById("div1");
var name1 = document.createElement("input");
var button = document.createElement("button");
var banner = document.createElement("span").setAttribute("id","banner");


node1.appendChild(name1);
node1.appendChild(button);
node1.appendChild(banner);
button.innerHTML = 'Add';
button.addEventListener("click");




}
