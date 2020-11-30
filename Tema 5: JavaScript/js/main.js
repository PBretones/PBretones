console.log('Hola Mundo');
function hey() {
    alert("HOLA EXTERNO");
};
document.getElementsByTagName("a")[2].addEventListener("click", hey);


/* Variables */
// var -> Scope Function
// let -> Scope del bloque de codigo
function saludar() {

    console.log(i); // Sin definir aun

    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i, "Sin worries");

}

saludar();

const num1 = 1; // Si intentamos ahora num1=2 nos devolverá error
let var1, var2, var3;

/* Tipos de datos */
const name = "John"; // String
const age = 30; // Number
const height = 1.8; // Number
const isApproved = false; // Boolean
const varUndefined = undefined; // Undefined
let varUndefined2; // Undefined
const selectedOption = null; // Null

console.log(typeof name, name);
console.log(typeof age, age);
console.log(typeof height, height);
console.log(typeof isApproved, isApproved);
console.log(typeof varUndefined, varUndefined);
console.log(typeof varUndefined2, varUndefined2);
console.log(typeof selectedOption, selectedOption);


/* Strings */
let str = "Hola Futuro.";
console.log(str, str.length);
let str2 = str + " Hola JS.";
console.log(str2, str2.length);
str2 = str.concat(" Hola JS.");
console.log(str2, str2.length);

console.log("Hola aparece en el índice", str2.indexOf("Hola"));
console.log("Hola aparece en el índice", str2.lastIndexOf("Hola"));
console.log(str2.substring(4, 9));

console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

console.log(str.replace("Futuro", "mundo"));

console.log(`A ${name} le mide lo menos ${age}`);

/* Objects */

const car = {
    brand: "BMW",
    weight: 2200,
    owner: "Paco",
    year: 2019,
}

console.log(typeof car);


/* Arrays */

let selectedColors = ["red", "blue"];
console.log(selectedColors, selectedColors.length);

// Añadir elementos
selectedColors[2] = "brown";
console.log(selectedColors);
selectedColors.push("yellow");
selectedColors.unshift("pink");
console.log(typeof selectedColors, selectedColors, selectedColors.length);

//Eliminar elementos
selectedColors.shift("pink"); // Elimina pink
console.log(typeof selectedColors, selectedColors, selectedColors.length);
selectedColors.pop(); // Elimina el ultimo del array (en este caso yellow)
console.log(typeof selectedColors, selectedColors, selectedColors.length);
selectedColors.splice(1, 1); // Elimina desde el elemento (1, ),la cantidad indicada ( , 1), por lo que elimina a blue
console.log(typeof selectedColors, selectedColors, selectedColors.length);
selectedColors.splice(1, 2); // Elimina blue y el siguiente (brown)
console.log(typeof selectedColors, selectedColors, selectedColors.length);


// Busqueda
console.log(selectedColors.indexOf("red"));
console.log(selectedColors.lastIndexOf("red"));

//Ordenar
selectedColors = ["red", "purple", "green", "black"];
selectedColors.sort(); // Los ordena al azar
console.log(selectedColors);


/* Condicionales */

let datoLogico = true;

if (datoLogico && 5 < 6 && true && 5 == "5" && (5 === "5")) {
    console.log("Condicional que siempre es verdadero");
} else if (false) {
    console.log("Otras acciones");
} else {
    console.log("No se ha cumplido ninguna condicion previa");

}

/* Funciones */
function suma(num1, num2) {
    return num1 + num2;
};

console.log(suma(2, 2));

function esPar(num) {
    const esPar = num % 2 === 0;
    return esPar;
};
console.log(esPar(2));
console.log(esPar(3));

// Funcion anonima

let saludar2 = function () {
    console.log("Hey-o");
};

console.log(typeof saludar2);

// Como expresion
let result = (function (num1, num2,) { return num1 + num2; })(2, 2);
console.log();

// Arrow functions
const perimeterOfSquare = function (side) {
    return side * 4;
};

perimeterofSquare = (side) => side * 4;
let perimeter = perimeterOfSquare(5);
console.log(perimeter);



// ES6

var numArray = [140000, 104, 99];
numArray.sort(function (a, b) {
    return a - b;
});

console.log(numArray);


numArray.sort((a, b) => a - b);// Ascending sort
console.log(numArray);
numArray.sort((a, b) => b - a); // Descending sort
console.log(numArray);

console.clear();
/* Bucles */

//For

for (let i = 20; i > 0; i--) {
    console.log(i);
};

// i++ / i-- es equivalente a i = i +- i y es equivalente a i += 1; // i -= 1;

// While
let i = 0;
while (i < 21) {
    console.log("Esta vez con while: ", i);
    i++;
}

console.log(selectedColors);


function myFunction(item, index){
    console.log(`Elemento ${index} es: ${item}`);
}
selectedColors.forEach(myFunction);
// El anterior forEach es equivalente al siguiente for:

for (let i=1; i< selectedColors.length - 1;i++) {
    console.log(`Elemento ${i} es: ${selectedColors[i]}`);
}

//for...of

for(let color of selectedColors){
    console.log(`FOR ... OF : Elemento ${i} es: ${selectedColors[i]}`);
}