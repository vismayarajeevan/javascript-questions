//find the output
//var expenses=[23000, 34000, 12000,56000,43000,27000,68000]
// 1.display highest expense


var expenses=[23000, 34000, 12000,56000,43000,27000,68000]
let max=expenses[0];

for(let i of expenses){
    if(i>max){
        max=i;
    }
}
console.log(max);
