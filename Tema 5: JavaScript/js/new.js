let opt1 = [1, 2, 3];

let opt2 = [];

// Version clasica
opt2 = opt1.map(function (value, index) {
    return value * 2;
});
console.log(opt2);

// Version map


opt2 = opt1.map(value => value * 2);
console.log(opt2);

// Ejemplo
let birthYear = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000];
let ages = [];
let ageYear = new Date().getFullYear();
ages = birthYear.map(value => ageYear - value);
console.log(ages);


// Filter 
let prices = [150, 50, 49, 51, 15, 148];
let expensivePrice = [];
expensivePrices = prices.filter(price => price >= 50);
console.log(expensivePrices);

// Ejemplo

const people = [
    { name: "Pedro", age: 21, },
    { name: "Juanito", age: 36, },
    { name: "Luis", age: 9, },
    { name: "Paula", age: 55, },
]

console.log(people);
let underPeople = people.filter(people => people.age >= 18);
let underPeopleName = underPeople.map(people => people.name); // Tras filtro,combinamos con map para solo tener los nombres de esos mayores de edad
console.log(underPeopleName);

// Reduce

const arr1 = [40, 20, 30, 10];
const suma = arr1.reduce((sumatorio, number) => sumatorio + number, 0); // sumatorio es la suma total actual,y number el indice que toca sumar.El 0 del final es el valor inicial del que partimos

console.log(suma);

// Sort

let arr2 = people.sort((people1,people2) => people1.age - people2.age);

console.log(arr2);
