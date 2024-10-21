// Replace  every  even  number  with  its  square
// Description:  Write  a  JavaScript  function  that  squares  every  even  number  in  an array.
// Example  Input:  [1, 2, 3, 4, 5]
// Expected  Output:  [1, 4, 3, 16, 5]


function even(array){
    let n=array.length
    for(let i=0;i<n;i++){
        if(array[i]%2==0){
            array[i]=array[i]**2;
        }
    }
    return array;
}
const input=[1,2,3,4,5];
console.log(even(input));
