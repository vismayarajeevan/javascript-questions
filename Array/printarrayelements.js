//1.Write a JavaScript program that creates an array of 5 numbers and uses a for loop to print each number to the console.


function printNumber(array){
    let n=array.length
    let result=[]
    for(let i=0;i<n;i++){
      result.push(array[i]);
       
    }
      return result;
}
const input=[5,1,10,15,20];
console.log(printNumber(input));
