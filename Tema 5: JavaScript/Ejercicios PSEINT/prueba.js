// Devolver miembros mayores a 3:
ar17 = [3,0,2,6,0,1,3,1,9,0,2,0];
let total=0;
for (i=0;i<ar17.length-1;i++){
    if(ar17[i] > 3){
        total += 1;
    }
    
}

/* console.log(total); */


// Imprimir elemento mas alto del array

ar18 = [15,24,13,78,21,4,45,67];
aux=0;
for (i=0;i<ar18.length-1;i++){
      
    if(ar18[i]>aux){
        aux=ar18[i];
    }
       
}

/* console.log(aux); */

// Array de numeros.Crear dos arrays con pares e impares,manteniendo el orden que tenian en el array original


const array = [1,2,43,6,7,8,2,3,4,5,3,2];

let array2 = [];
let array3 =[];


for(i=0;i<array.length;i++){
    if (array[i] % 2 == 0){
        array2.push(array[i]);        
    }

    else{array3.push(array[i]);}
}

/* console.log(array2);
console.log(array3);
 */
// Imprimir index del elemento menor

const ar20 = [15,24,13,78,21,4,45,67];
let auxilio=ar20[0];
let index=0;
for (i=0;i<ar20.length-1;i++){
      
    if(ar20[i]<auxilio){
        auxilio=ar20[i];
        index=i;
    }
       
}

console.log(`El numero menor es ${auxilio} y el indice es ${index}`);