function isPrime(num) { 

    if (num <= 1) return false; 
  
    for (let i = 2; i <= Math.sqrt(num); i++) { 
  
      if (num % i === 0) return false; 
  
    } 
  
    return true; 
  
  } 
  const prompt= require('prompt-sync') ({sigint:true})

const input=prompt("Enter a number:")

var n= parseInt(input)
console.log(isPrime(n));