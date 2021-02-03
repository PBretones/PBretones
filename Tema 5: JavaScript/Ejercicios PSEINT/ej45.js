let array = [];
let arrayM = [];



for(i=0;i<20;i++){
    let random = Math.floor(Math.random() * (50 - 0) + 1);
    array.push(random);
    if(random > 25 && random % 2 == 0){
        arrayM.push(random);
    }      
}
console.log(array);
console.log(arrayM);

document.getElementById("main").innerHTML = arrayM;