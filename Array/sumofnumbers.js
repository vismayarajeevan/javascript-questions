// Finding  the  Sum  of  Array  Elements
// Question:  How  do  you  find  the  sum  of  all  elements  in  an  array  in  JavaScript?
// Example  Input:  [1, 2, 3, 4, 5]
// Expected  Output:  15


function sum(array){
    let sum=0;
    let n=array.length;
    for(let i=0;i<n;i++){
        sum=sum+array[i];
    }
    return sum;
}
const input=[1,2,3,4,5];
console.log(sum(input));
