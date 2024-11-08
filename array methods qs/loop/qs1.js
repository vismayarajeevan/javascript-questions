//find the output
//var expenses=[23000, 34000, 12000,56000,43000,27000,68000]
// 1.display least expense


var expenses=[23000, 34000, 12000,56000,43000,27000,68000];
let min=expenses[0];
let n=expenses.length;
for(let i=0;i<n;i++){
    if(expenses[i]<min){
        min=expenses[i];
        
    }
}
console.log(min);
