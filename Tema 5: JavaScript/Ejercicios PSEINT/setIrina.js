const validate = document.getElementById("check");
validate.addEventListener("click", validation);
const passwordCond = document.getElementById("input");
const showHere = document.querySelector("#showHere");

function validation (){
    
    const passString = passwordCond.value;
    console.log(passString);
    array = Array.from(passString);
    console.log(array);
    let checkArray = new Set (array);
    console.log(checkArray);
    if (checkArray.size == array.length){
        showHere.innerHTML = `La contraseña ${passwordCond.value} es válida`;

    }
    else {
        showHere.innerHTML = `La contraseña ${passwordCond.value} no cumple los requisitos`;
    }
}
