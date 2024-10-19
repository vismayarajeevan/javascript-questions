// write a program to check 3 digit number is amstrong number or not


function amstrong(n){
    var original=n;
    var sum=0;
    while(n>0){
        let num=n%10;
        sum+=num**3;
        n=Math.floor(n/10);
    }
    if(original==sum){
        return "amstrong number";
    }
    return "not a amstrong number";
}


const prompt= require('prompt-sync') ({sigint:true})
const input=prompt("Enter a number:")

var n= parseInt(input)
console.log(amstrong(n));
