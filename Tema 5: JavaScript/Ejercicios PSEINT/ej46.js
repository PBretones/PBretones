let random= [];
let abc = ["a ","b ","c "];



for(i=0;i<3;i++){
    number = Math.floor(Math.random() * (50 - 0) + 1);
    random.push(number);
    abc[i]=number;
     
}

abc.sort((a,b)=> a - b);
abc.reverse((a,b)=> a - b);


console.log(random);
console.log(abc);

