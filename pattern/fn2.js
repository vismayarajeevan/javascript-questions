// 1 1 1 1
// 2 2 2 2 
// 3 3 3 3
// 4 4 4 4


function pattern2(n){
    for(let i=1;i<=n;i++){
        var row=""
        for(let j=1;j<=n;j++){
            row+=i+" "
        }
        console.log(row);
        
    }
}

const prompt = require('prompt-sync') ({sigint:true})

const input= prompt("enter a number:")
var n=parseInt(input)   // convert string into integer
pattern2(n)