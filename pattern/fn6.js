// 1
// 2 2
// 3 3 3
// 4 4 4 4


function pattern6(n){
    for(let i=1;i<=n;i++){
        var row=""
        for(let j=1;j<=i;j++){
            row+=i+" "
        }
        console.log(row);
        
    }
}
pattern6(5)