const reorder = document.createElement("button");
reorder.textContent = "MAGIC";

const main = document.getElementById("main");
document.body.insertBefore(reorder, main);

const input = document.createElement("input");
document.body.insertBefore(input,reorder);

const nameDiv = document.createElement("div");
document.body.insertBefore(nameDiv,input);

const button = document.createElement("button");
button.textContent = "PRESS";
document.body.insertBefore(button,reorder);


nameArray=[];


function addName(){
nameArray.push(input.value);
nameDiv.innerHTML = nameArray;

}

button.addEventListener("click", addName);
reorder.addEventListener("click", magic);

function magic(){
    nameArray.sort((a,b)=> a - b);
    nameDiv.innerHTML = nameArray;

}