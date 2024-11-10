// [id,name,price,stock]
product = [
    [1,'hide and seek', 50, 20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4, 'parleG', 25,0],
    [5,'tiger', 20,30],
    [6, 'unibic', 60,20],
    [7,'good day',70,20]
]
//1) display all products name
//2) display products whose price <Rs.50
//3) Print price of oreo
//4) print costly product name
//5) Display out of stack product
//6) Sort products based on stock in descending order
//7) print product having maximum available stock 
//8) is there any product can be purchased by Rs.10
//9) Is there any product in the range of 10 to 30
//10) Print all products in the range of 10 to 30



console.log("------------------------------------Answers-----------------------------------------");

//1) display all products name

console.log("-------------all names-------------");
product.forEach(name=>console.log(name[1]));


//2) display products whose price <Rs.50

console.log("-------------products price<50-------------");
product.filter(item=>item[2]<50).forEach(item=>console.log(item[1]))




//3) Print price of oreo

console.log("-------------price of oreo-------------");

const oreo=product.find(item=>item[1]=="oreo")
console.log(`price of oreo: ${oreo[2]}`);


//4) print costly product name

console.log("-------------costly product-------------");

const costly=product.reduce((a,b)=>a[2]>b[2]?a:b)
console.log(`costlt product is ${costly[1]} and its price is ${costly[2]}`);


//5) Display out of stack product

console.log("-------------out of stock product-------------");

product.filter(item=> item[3]==0).forEach(item=>console.log(item[1]))

//6) Sort products based on stock in descending order

console.log("-------------sort based on stock in descending-------------");

product.sort((a,b)=>b[3]-a[3]).forEach(item=>console.log(item[1]))

//7) print product having maximum available stock 

console.log("-------------maximum available stock-------------");

console.log(product.reduce((a,b)=>a[3]>b[3]?a:b));

//8) is there any product can be purchased by Rs.10


console.log("-------------is any product purchased by 10-------------");

console.log(product.some(item=>item[2]==10)?"yes":"no");


//9) Is there any product in the range of 10 to 30

console.log("-------------is any product purchased by 10 to 30-------------");

console.log(product.some(item=>item[2]>=10 && item[2]<=30)?"yes":"no");


//10) Print all products in the range of 10 to 30

console.log("-------------print all  product purchased by 10 to 30-------------");
product.filter(item=>item[2]>=10 && item[2]<=30).forEach(item=>console.log(item[1]))








