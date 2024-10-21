//Write a function that takes an array of numbers and returns a new array containing only the numbers that are greater than 10. Use a for loop    
//and an if statement for filtering.


function filterArray(array){
    let n=array.length
    let result=[]
    for(let i=0;i<n;i++){
        if(array[i]>10){
            result.push(array[i]);
        }
    }
    return result;
}
const input=[2,3,70,30,4,6,80];
console.log(filterArray(input));

