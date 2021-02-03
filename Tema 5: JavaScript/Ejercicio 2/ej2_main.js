class Person {
    constructor(name, lastName, email, age, city, checkout) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.city = city;
        this.checkout = checkout;

    }
}

let Bob = new Person('Bob', 'Sponja', 'bob@gmail.com', 23, 'Wisconsin', 0);
let Sarah = new Person('Sarah', 'Connor', 'sarah@hotmail.com', 66, 'Almedinilla', 0);
let Samanta = new Person('Samanta', 'Villar', 'samanta@gmail.com', 33, 'Madrid', 0);
let Ramon = new Person('Ramon', 'Sampedro', 'rasam@yahoo.com', 70, 'Toledo', 0);

let myUsers = [
    [],
    Bob,
    Sarah,
    Samanta,
    Ramon,
];






function changeUser() {


    let userIndex
    userIndex = document.personas.userSelect[document.personas.userSelect.selectedIndex].value;
    chosenUser = myUsers[userIndex];
    console.log(chosenUser);


    for (let key in myUsers[userIndex]) { // Alternativas: Object.keys(object);Object.values(obj); Object.entries();
        const userRow = document.createElement("li"); // Crea variable y le asigna un li creado
        let userInfo = (key, myUsers[userIndex][key]); // Asigna valor 
        let newContent = document.createTextNode(userInfo); // Crea variable y le asigna ese valor a un nodo de texto
        userRow.appendChild(newContent); // Apendiza el nodo de texto al li creado anteriormente
        const currentDiv = document.getElementById("showUser"); // Busco el select y lo asigno a una variable
        document.body.insertBefore(userRow, currentDiv); // Inserto el li antes
        let userSelect = document.getElementById("userSelect");
        userSelect.addEventListener("change", removingUser);
        function removingUser() {
            userRow.remove();
        }

    }
}

const pressButton = document.getElementById("plusButton");
pressButton.addEventListener("click", oneMore);
function oneMore() {
    chosenUser.checkout = chosenUser.checkout + 1;
    
    let userIndex
    userIndex = document.personas.userSelect[document.personas.userSelect.selectedIndex].value;
    chosenUser = myUsers[userIndex];
    console.log(chosenUser);


    for (let key in myUsers[userIndex]) { // Alternativas: Object.keys(object);Object.values(obj); Object.entries();
        const userRow = document.createElement("li"); // Crea variable y le asigna un li creado
        let userInfo = (key, myUsers[userIndex][key]); // Asigna valor 
        let newContent = document.createTextNode(userInfo); // Crea variable y le asigna ese valor a un nodo de texto
        userRow.appendChild(newContent); // Apendiza el nodo de texto al li creado anteriormente
        const currentDiv = document.getElementById("showUser"); // Busco el select y lo asigno a una variable
        document.body.insertBefore(userRow, currentDiv); // Inserto el li antes
        let userSelect = document.getElementById("userSelect");
        userSelect.addEventListener("change", removingUser);
        function removingUser() {
            userRow.remove();
        }
    }

}
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetCheckout);
function resetCheckout() {
    chosenUser.checkout = 0;

    let userIndex
    userIndex = document.personas.userSelect[document.personas.userSelect.selectedIndex].value;
    chosenUser = myUsers[userIndex];
    console.log(chosenUser);

    for (let key in myUsers[userIndex]) { // Alternativas: Object.keys(object);Object.values(obj); Object.entries();
        userRow = document.createElement("li"); // Crea variable y le asigna un li creado
        userInfo = (key, myUsers[userIndex][key]); // Asigna valor 
        newContent = document.createTextNode(userInfo); // Crea variable y le asigna ese valor a un nodo de texto
        userRow.appendChild(newContent); // Apendiza el nodo de texto al li creado anteriormente
        currentDiv = document.getElementById("showUser"); // Busco el select y lo asigno a una variable
        document.body.insertBefore(userRow, currentDiv); // Inserto el li antes
        userSelect = document.getElementById("userSelect");
        userSelect.addEventListener("change", removingUser);
        function removingUser() {
            userRow.remove();
        }
    }
}

