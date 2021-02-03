
array = [];
let positive = 0;
let totalPositive = 0;
let sumAll = 0;
let total = 0;
let totalAll = 0;

const newDiv = document.createElement("button");
newDiv.textContent = "Enviar Consulta";
const currentDiv = document.getElementById("div1");
document.body.insertBefore(newDiv, currentDiv);

const mayoresDiv = document.createElement("button");
mayoresDiv.textContent = "Mayores que cero";
const mayoresPlace = document.getElementById("mayores");
document.body.insertBefore(mayoresDiv, mayoresPlace);

const promedioDiv = document.createElement("button");
promedioDiv.textContent = "Promedio de los positivos";
const promedioPlace = document.getElementById("promedio");
document.body.insertBefore(promedioDiv, promedioPlace);

const promedioTotalDiv = document.createElement("button");
promedioTotalDiv.textContent = "Promedio Total";
const promedioTotalPlace = document.getElementById("promedioTotal");
document.body.insertBefore(promedioTotalDiv, promedioTotalPlace);


newDiv.addEventListener("click", validation);
function validation() {
    const userAmount = document.getElementById("input");

    for (i = 0; i < userAmount.value; i++) {
        let random = Math.floor(Math.random() * (10 - -10) + -10);
        array.push(random);
        sumAll += random;
        if (random > 0) {

            totalPositive += random;
            positive += 1;
        }
    }

    total = totalPositive / positive;
    totalAll = sumAll / userAmount.value;


   

    console.log(array);
    console.log(positive);
    console.log(total);
    console.log(totalAll);
}




mayoresDiv.onclick = () => mayoresDiv.innerHTML = `El total de números mayores que cero es ${positive}`;
promedioDiv.onclick = () => promedioDiv.innerHTML = `El promedio de los numeros positivos es ${total}`;
promedioTotalDiv.onclick = () => promedioTotalDiv.innerHTML = `El promedio de los numeros positivos es ${totalAll}`;





