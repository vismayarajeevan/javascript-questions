// write a program to find factorial of a number

function factorial(n){
    let fact=1;
    for(let i=n;i>0;i--){
        fact*=i;
        
    }
    return fact;
}
const prompt= require('prompt-sync') ({sigint:true})
const input=prompt("Enter a number:");
var n=parseInt(input);
console.log(factorial(n));

