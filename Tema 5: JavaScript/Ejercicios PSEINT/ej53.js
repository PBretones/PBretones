const arrayLengthInput = document.createElement("input");
const main = document.getElementById("main");
document.body.insertBefore(arrayLengthInput, main);

const myButton = document.createElement("button");
myButton.textContent = "PRESS";
document.body.insertBefore(myButton, main);

const arrayNumberInput = document.createElement("input");
document.body.insertBefore(arrayNumberInput, main);


const searchDiv = document.createElement("div");
document.body.insertBefore(searchDiv, main);


const arrayNumber = document.createElement("button");
document.body.insertBefore(arrayNumber, searchDiv);
arrayNumber.textContent = "SEARCH";

myButton.addEventListener("click", myLength);
arrayNumber.addEventListener("click", myLength);
const myArray = [];
let prom = 0;


function myLength() {
    if (arrayLengthInput.value != "") {
        let arrayLength = Number(arrayLengthInput.value);
        console.log(arrayLength);


        if ((arrayLengthInput.value != "") && (arrayNumberInput.value != "") && (myArray.length < arrayLength)) {
            let numberToPush = Number(arrayNumberInput.value);
            myArray.push(numberToPush);
            console.log(myArray);
            prom = prom + numberToPush;
            console.log(prom);

        }

        if (myArray.length > arrayLength) {
            const promedio = prom / arrayLength;
            main.textContent = promedio;
        }
    }




}



