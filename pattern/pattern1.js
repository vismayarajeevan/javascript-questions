// print pattern

// # # # #
// # # # #
// # # # #
// # # # #

const prompt =require('prompt-sync') ({signit:true})

const input= prompt("Enter the number:")

//convert string to number

var num= Number(input)
for(var i=1;i<=num;i++){
    var row=""
    for(var j=1;j<=num;j++){
        row+="#"
    }
    console.log(row);
}

