//Write a JavaScript function that takes an array of numbers and returns the largest number. Use a for loop for comparison.



function largest(array){
    let n=array.length
    let largest=array[0]
    for(let i=0;i<n;i++){
        if(array[i]>largest){

            largest=array[i];
        }
    }
    return largest;
}
const input=[20,4,10,50,90,30];
console.log(largest(input));
