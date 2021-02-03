const main = document.getElementById("main");

const myButton = document.createElement("button");
myButton.textContent = "PRESS";
document.body.insertBefore(myButton, main);

const searchInput = document.createElement("input");
document.body.insertBefore(searchInput, main);


const searchDiv = document.createElement("div");
document.body.insertBefore(searchDiv, main);


const searchButton = document.createElement("button");
document.body.insertBefore(searchButton, searchDiv);
searchButton.textContent = "SEARCH";

myButton.addEventListener("click", myArrayPush);
searchButton.addEventListener("click", mySearch);

let myArray = [];
let myMatch;

const number = false;
function myArrayPush() {
    for (i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * (15 - 1) + 1);

        if (myArray.length < 10) {
            myArray.push(random);
        }
    }
    console.log(myArray);
    return myArray;
}

function mySearch() {
    let number = searchInput.value;
    myMatch = number;
    console.log(myMatch);
    for (i = 0; i < myArray.length - 1; i++) {
        if (myMatch == myArray[i]) {
            const index = i;
            main.innerHTML = `El numero ${myMatch} aparece por primera vez en el indice ${index}`;
            break;
        }
        else {
            main.innerHTML = `El numero ${myMatch} no aparece`;
        }
    }
  
}