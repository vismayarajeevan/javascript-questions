// [id,name,price,stock]
products = [
    [1,'hide and seek', 50, 20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4, 'parleG', 25,0],
    [5,'tiger', 20,30],
    [6, 'unibic', 60,20],
    [7,'good day',70,20]
]

// search a string is available in the product array, it returns an array of product which include the given string otherwise display no products are available


const prompt= require('prompt-sync')({signit:true})
const input=prompt("Enter a word:")

const output=products.filter(item=>item[1].includes(input))

console.log(output.length>0?output.map(item=>item[1]):"not availabe");
