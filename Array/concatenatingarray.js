//Concatenating  Two  Arrays
//Question:  How  can  you  concatenate  two  arrays  in  JavaScript? 
//Example  Input:  [1, 2, 3] and  [4, 5, 6]
//Expected  Output:  [1, 2, 3, 4, 5, 6]


function concatenating(array1, array2){
    let n=array1.length
    let m=array2.length
    let result=[]
    for(let i=0;i<n;i++){
        result.push(array1[i]);
    }
    for(let j=0;j<m;j++){
        result.push(array2[j]);
    }
    return result;
}
const input1=[1,2,3];
const input2=[4,5,6];
console.log(concatenating(input1,input2));
