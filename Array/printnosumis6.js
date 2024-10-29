//print pairs whose sum is 6 
//pairArray=[2,3,4,5]
function sum(array){
var n=array.length
var result=[]
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(array[i]+array[j]==6){

            console.log(array[i],array[j]);

            // result.push(array[i],array[j])
            
        }
    }
 }
//  return result;
}
const input=[2,3,4,5];
// console.log(sum(input));
sum(input)

