// write  a arrow function to find factorial of a number


const factorial=x=>x==1?1:x*factorial(x-1);
console.log(factorial(1));
console.log(factorial(6));
