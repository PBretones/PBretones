
console.log("------------------ES5-----------------------");
// Objetos y prototipos
// 1.1 Creacion de objetos y asignacion de propiepades
let myCar = {};
console.log(typeof myCar, myCar);


myCar.brand = "Ford";
myCar.model = "Mustang";
console.log(typeof myCar, myCar);

myCar["brand"] = "Ford";
myCar["model"] = "Mustang";
console.log(typeof myCar, myCar);


mycar = {
    brand: "Ford",
    model: "Mustang",
}

console.log(typeof myCar, myCar);

// 1.2 Enumeracion de propiedades y valores

for (const property in myCar) {
    console.log("Using For...in", property);
}


const keys = Object.keys(myCar);
console.log(typeof keys, keys);
keys.forEach(key => console.log("Using Object.keys:", key));

const values = Object.values(myCar);
console.log("Values:", typeof values, values);
values.forEach(value => console.log("Using Object.values:", value));

const entries = Object.entries(myCar);
console.log("Entries:", typeof entries, entries);
entries.forEach(function ([key, value]) {
    console.log("Using Object.entries:", key, value)
});


// 1.3 Funciones constructoras

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.getAge = function () {
        let age = new Date().getFullYear() - this.year;
        console.log(`This ${this.brand} ${this.model} is ${age} years old.`);
    }
}

myCar = new Car("Ford", "Mustang", 2015);
console.log(typeof myCar, myCar);
myCar.getAge();

// 1.4 Metodos de objetos vs metodos del prototipo

Car.getAge = function () {
    console.log("Otro calculo de edad.");
}

myCar.getAge();

Car.prototype.getHP = function () {
    console.log("This car has 300 horsepower.");
}

// 1.5 Herencia

function SUV(brand, model, year, height, width) {
    Car.call(this, brand, model, year);
    this.height = height;
    this.width = width;
}


SUV.prototype = Car.prototype;
SUV.prototype.constructor = SUV;
let mySUV = new SUV("Audi", "Q7", 201, 2);
console.log(mySUV);
mySUV.getHP();


console.log("------------------ES6-----------------------");


// Clsaes (Syntactic sugar)

class Book {

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;

    }

    getSummary() {
        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
    }

    get cover() {
        console.log("Hola,paso de tu solicitud get.");
    }
    set cover(value) {
        this.title = title;
    }
}

const book1 = new Book("Metamorphosis", "Franz Kafka", 1912);
console.log(book1);
book1.getSummary();

let cover = book1.cover;
console.log(cover);

book1.cover = "Nueva portada";



// Get

const finalPrice = book1.price;
console.log(finalPrice);


// Set

book1.price = 121;
console.log(book1);

book1.price = 2;
console.log(book1);



class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    get fullName() {
        return `${this.name} ${this.lastname}`
    }
    set fullName(newName) {
        this.name = newName.split(" ")[0];
        this.lastname = newName.split(" ")[1];

    }
}


const person1 = new Person("Roger", "Penrose");
console.log(person1);
person1.fullName = "Richard Dawkins";

console.log(person1);

class Magazine extends Books {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

const mag1 = new Magazine("Autopista", "Author", 2017, "July");


