//Flag  to  Indicate  Even  Numbers
//Question:  How  would  you  use  a  flag  to  indicate  if  a  number  in  an  array  is  even? 
//Example  Input:  [1, 2, 3, 4]
//Expected  Output:  [false, true, false, true]


function evenFlag(array){
    let n=array.length
    let result=[]
    for(let i=0;i<n;i++){
        if(array[i]%2==0){
            result.push(true);
        }
         else{
            result.push(false);
        }
    }
    return result;
}
const input=[1,2,3,4];
console.log(evenFlag(input));
