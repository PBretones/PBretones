
// 8)
document.getElementById("newTabButton").addEventListener("click", simulateCtrl)

function simulateCtrl() {
    document.getElementById("linked").addEventListener("click", newTab);
}
function newTab(event) {
    event.preventDefault()
    open(linked, '_blank')
}


//9)

let pColors = document.getElementById("pColors");
let selectedColor = document.getElementById("selectedColor");

pColors.addEventListener("change", changeColor);

function changeColor() {
    pColors.style.color = selectedColor.value;
}


//10)


let randomButton = document.getElementById("myRandom");
let randomList = [];
let oddCounter = 0;
let evenCounter = 0;
randomButton.addEventListener("click", generateRandom)

function generateRandom() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomList.push(randomNumber);
    document.getElementById("divnumber").textContent = randomList;
    console.log(randomList);
    if (randomNumber % 2 === 0) {
        evenCounter = evenCounter + 1;
        myEven.textContent = evenCounter;
    }
    else {
        oddCounter = oddCounter + 1;
        myOdd.textContent = oddCounter;
    }

}

//11)


let myList = [1, 3, 6, 7, 12, 14, 15, 19];
myInputButton.addEventListener("click", checkNumber);
let filteredNumber = [];
function checkNumber() {
    filteredNumber = myList.filter(myList => myList == myInputNumber.value);
    if (filteredNumber == myInputNumber.value) {
        alert("Numero ya en la lista")
    } else {
        myList.unshift(+myInputNumber.value);
        console.log(myList);
        alert(`Correcto! Ahora la lista es mas larga:${myList}`)
    }
    console.log(typeof filteredNumber, filteredNumber);
}

//12)
myStylishButton = document.getElementById("myStylishButton");
myStylishButton.addEventListener("click",eraseStyle);

function eraseStyle (){
    myStylishButton.classList.toggle("myStylishClass");
    
}