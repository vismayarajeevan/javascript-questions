//How would you sort an array of numbers in ascending order in javascript

function ascending(array){
    var n=array.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(array[i]>array[j]){
                let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
    return array;
}

 const prompt=require('prompt-sync') ({sigint:true})
 const input=prompt("Enter the numbers:")

 var array1=input.split(' ').map(Number);


console.log(ascending(array1));


