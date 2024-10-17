// 1 2 3 4 
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4



function pattern3(n){
    for(let i=1;i<=n;i++){
        var row=""
        for(let j=1;j<=n;j++){
            row+=j+" "
        }
        console.log(row);
        
    }
}
pattern3(4)
    