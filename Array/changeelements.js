//Changing  the  value  of  the  second  index  element
// Description:  Write  a  JavaScript  function  that  changes  the  value  of  the  second index  element  in  an  array  to  the  value  10.
//  Example  Input:  [2, 5, 7, 3, 8]
//  Expected  Output:  [2, 10, 7, 3, 8]


function changeelement(array){
    let n=array.length
    for(let i=0;i<n;i++){
        if(i==1){
            array[i]=10;
    
        }
    }
    return array;
}
const input=[2,5,7,3,8];
console.log(changeelement(input));
