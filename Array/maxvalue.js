//Finding  the  Maximum  in  an  Array
// Question:  Write  a  JavaScript  function  to  find  the  maximum  number  in  an  array. 
//Example  Input:  [10, 5, 20, 15]
// Expected  Output:  20


function maximum(array){
    let n=array.length;
    let max=array[0];
    for(let i=0;i<n;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}
const input=[10,5,20,15];
console.log(maximum(input));
