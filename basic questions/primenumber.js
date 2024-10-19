// check whether a number is prime number or not

function prime(n){
//    var number=true;
   for(let i=2;i<=n;i++){
    if(n%i==0){
        // number= false;
        return "not a prime number";
    }
    }
    return "prime number";
   } 

const prompt= require('prompt-sync') ({sigint:true})

const input=prompt("Enter a number:")

var n= parseInt(input)
console.log(prime(n));