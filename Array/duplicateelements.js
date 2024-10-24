//print dupilcate elements


function duplicate(array){
    let n=array.length
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(array[i]==array[j]){
                return array[i];
            }
        }
    }
}
const input=[1,4,8,5,4,3];
console.log(duplicate(input));
