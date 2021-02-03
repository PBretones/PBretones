// 1) OK

// Creamos clase y constructor
class ArrayClass {
    constructor(cargo, rendimiento, salario) {
        this.cargo = cargo
        this.rendimiento = rendimiento
        this.salario = salario
    }

}
// Creamos array y rellenamos con undefined para admitir objetos
let array1 = Array.from(new Array(20));

/* console.log(ArrayClass.getOwnPropertyNames(array1)); */


// Creamos funcion para numero random entre dos valores (salario)
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


// Creamos for para sustituir valores en cada elemento del array
for (i = 0; i < 20; i++) {
    let randomNumber = Math.random().toPrecision(2);
    let x = new ArrayClass(`Empleado ${i + 1}`, randomNumber, getRandom(1250, 4000));

    array1[i] = x;



}

console.log(array1);


// 2) OK

/* array1.sort((a, b) => (a.rendimiento > b.rendimiento) ? 1 : -1)

    console.log(array1); */

// 3) OK

/* /*
array1.sort((a, b) => (a.salario > b.salario) ? 1 : -1)

    console.log(array1); */


// 4) OK PERO DEBE SER INDEPENDIENTE
/* console.log("EJERCICIO 4");
let finalArray = array1.sort().reverse((a, b) =>(a.cargo - b.cargo));
console.log(finalArray);
 */
// 5) OK
/* console.log("EJERCICIO 5");
arrayFiltered = array1.filter(person => person.salario > 2500).map(person => `${person.cargo} : ${person.salario}`);

console.log(arrayFiltered); */
 
// 6) OK

const increasedSalaries = array1.map(employee =>{
    if (employee.salario <1500){
        employee.salario*= 1.25
    }
    return employee;
})

console.log(increasedSalaries);

/* let filterArray1 = array1.filter(person => person.salario < 1500).map(person => `${person.cargo} : ${person.salario * 1.25}`);
console.log(filterArray1);

arrayFilteredBis = array1.filter(person => person.salario > 1500).map(person => `${person.cargo} : ${person.salario}`);

finalArray = arrayFilteredBis.sort((a, b) => (a.cargo < b.cargo) ? 1 : -1);

console.log(finalArray,filterArray1);
 */


// 7)
const tax = 1.15;
const SalariesCost = array1.reduce((a,b)=> a+b.salario,0)*tax;

console.log(SalariesCost);


// 8)






