console.log("Hello World");

// Crear un array de 10 elementos


let array = [];
const arrayLength = 100;
for (let index = 0; index < arrayLength; index++) {
    array[index] = arrayLength - index;
    console.log(array[index]);
}

// Con forEach crear 2o array que copie los elementos del primero

let array2 = [];

array.forEach(element => {
    array2.push(element)

});
console.log(array2);

// Alternativa:
let array3 = [];
function myFunction (value,index) {
    array3.push(value)
}
array.forEach(myFunction)

console.log(array3);