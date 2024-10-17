// *
// * *
// * * *
// * * * *

function pattern4(n){
    for(let i=1;i<=n;i++){
        var row=""
        for(let j=1;j<=i;j++){
            row+="* "
        }
        console.log(row);
        
    }
}
const prompt= require('prompt-sync') ({sigint:true})
const input=prompt("Enter a number:")
 var n= parseInt(input)
 pattern4(n)