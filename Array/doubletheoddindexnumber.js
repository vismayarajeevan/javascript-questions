//Double  the  value  of  odd-indexed  elements
// Description:  Write  a  JavaScript  function  that  doubles  the  value  of  every  element located  at  an  odd  index  in  an  array.
// Example  Input:  [1, 2, 3, 4, 5]
// Expected  Output:  [1, 4, 3, 8, 5]



function double(array){
    let n=array.length
    for(let i=0;i<n;i++){
        if(i%2!==0){
            array[i]*=2;
        }
    }
    return array;
}
const input=[1,2,3,4,5]
console.log(double(input));
