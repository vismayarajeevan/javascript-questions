//Reverse an array

//.Write a JavaScript function that takes an array and returns a new array with the elements in reverse order. Use a for loop to reverse the array.


function reverse(array){
    let n=array.length
    let result=[]

    for(let i=n-1;i>=0;i--){
           result.push(array[i]);
    }
    return result;
}
const input=[10,20,30,40,50];
console.log(reverse(input));
