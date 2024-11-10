var numArray=[10,20,30,40,2,3,5,89,90]

// find least number

console.log("-----------------smallest value----------------------");

console.log(numArray.reduce((a,b)=>a<b?a:b));

//find highest number

const large =numArray.reduce((a,b)=>a>b?a:b)
console.log(`largest value is: ${large}`);

//find total sum of all numbers

const sum=numArray.reduce((a,b)=>a+b)
console.log(`sum is : ${sum}`);





