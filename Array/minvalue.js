// Finding  the  Minimum  in  an  Array
// Question:  Write  a  JavaScript  function  to  find  the  minimum  number  in  an  array.
// Example  Input:  [10, 5, 20, 15]
// Expected  Output:  5


function minimum(array){
    let n=array.length;
    var min=array[0];
    for(let i=0;i<n;i++){
        if(array[i]<min){
            min=array[i];
        }
    }
    return min;
}
const input=[10,5,20,15];
console.log(minimum(input));
