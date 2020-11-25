console.log('Hola Mundo');
function hey() {
    alert("HOLA EXTERNO");
};
document.getElementsByTagName("a")[2].addEventListener("click", hey);


/* Variables */
// var -> Scope Function
// let -> Scope del bloque de codigo
function saludar(){

    console.log(i); // Sin definir aun
    
    for (var i=0;i<5;i++){
        console.log(i);
    }

    console.log(i, "Sin worries");

}

saludar();

const num1 = 1; // Si intentamos ahora num1=2 nos devolverá error
let var1,var2,var3;

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
console.log(typeof varUndefined2,varUndefined2);
console.log(typeof selectedOption,selectedOption);


/* Strings */
let str = "Hola Futuro.";
console.log(str, str.length);
let str2 = str + " Hola JS.";
console.log(str2, str2.length);
str2  = str.concat(" Hola JS.");
console.log (str2, str2.length);

console.log("Hola aparece en el índice", str2.indexOf("Hola"));
console.log("Hola aparece en el índice", str2.lastIndexOf("Hola"));
console.log(str2.substring(4,9));

console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

console.log(str.replace("Futuro", "mundo"));

console.log(`A ${name} le mide lo menos ${age}`);



/* Objects */

const car = {
    brand: "BMW" ,
    weight: 2200,
    owner: "Paco",
    year: 2019,
}

console.log(typeof car);
console.log(car const);