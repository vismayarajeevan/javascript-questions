const numArray=[
    [10,20],[18,19],[30,40],[50,60],[70,80],[90,100]
]

//1) write a program to print all numbers>50
//2) write a program to print an array of squares of all numbers in the existing array
//3)print total sum of all numbers
//4)print highest number


console.log("----------------------------------Answers------------------------------------------");



//1) write a program to print all numbers>50

console.log("---------------numbers>50------------");
const number=numArray.flat()

console.log(number.filter(num=>num>50));


//2) write a program to print an array of squares of all numbers in the existing array

console.log("---------------square of all numbers------------");

console.log(number.map(num=>num**2));



//3)print total sum of all numbers

console.log("---------------total sum------------");

console.log(number.reduce((a,b)=>a+b));

//4)print highest number

console.log("---------------highest number------------");
console.log(number.reduce((a,b)=>a>b?a:b));
