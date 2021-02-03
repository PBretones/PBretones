let abc = [];
let unordered = [];

for(i=0;i<5;i++){
    number = Math.floor(Math.random() * (100 - 0) + 1);
    abc.push(number);
    unordered.push(number);
        
}


let ordered = abc.sort((a,b)=> a - b);


document.getElementById("main").innerHTML = `${unordered} /// ${ordered}`;
