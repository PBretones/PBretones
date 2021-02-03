const input = document.createElement("input");
const main = document.getElementById("main");
document.body.insertBefore(input, main);

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

myButton.addEventListener("click", mySentence);
searchButton.addEventListener("click", mySearch);






function mySentence() {
    myInput = input.value;
    main.textContent = myInput;
}

function mySearch() {
    mySearchInput = searchInput.value;
    inputArray = Array.from(myInput);
    let match = 0;
    console.log(`El array es ${inputArray}`);
    for (i = 0; i < inputArray.length; i++) {
        console.log(mySearchInput);
        if (inputArray[i] == mySearchInput) {
            match = match+1;
        }
    }

    main.innerHTML = `${myInput} contiene ${match} veces la letra ${mySearchInput}`




}

