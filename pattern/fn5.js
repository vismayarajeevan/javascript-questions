// 1
// 1 2
// 1 2 3
// 1 2 3 4


function pattern5(n){
    for(let i=1;i<=n;i++){
        var row=""
        for(let j=1;j<=i;j++){

            row+=j+" "
        }
        console.log(row);
        
    }
}
pattern5(4)