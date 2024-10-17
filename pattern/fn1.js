// print pattern

// # # # #
// # # # #
// # # # #
// # # # #

function pattern1(n){
    for(var i=1;i<=n;i++){
        var row=""
        for(var j=1;j<=n;j++){
            row+="# "
        }
        console.log(row);
        
    }
}

const prompt= require('prompt-sync') ({sigint:true})
const input= prompt("enter the number:")
var n =parseInt(input)
pattern1(n)