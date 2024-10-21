//Filtering  Even  Numbers  from  an  Array
//Question:  How  would  you  filter  out  even  numbers  from  an  array  in  JavaScript? 
//Example  Input:  [1, 2, 3, 4, 5, 6]
//Expected  Output:  [2, 4, 6]


function evenNumbers(array){
    let n=array.length
    let result=[]
    for(let i=0;i<n;i++){
        if(array[i]%2==0){
            result.push(array[i]);
        }

    }
    return result;
}
const input=[1,2,3,4,5,6];
console.log(evenNumbers(input));
