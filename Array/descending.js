//How would you sort an array of numbers in descending order in javascript


function descending(array){
    var n=array.length
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(array[i]<array[j]){
                let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
    return array;
}
const input=[1,2,3,5,4,6];
console.log(descending(input));
