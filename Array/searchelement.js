//check element 2 is in array or not
//numArray=[10,11,2,23,45,28,58]

numArray=[10,11,2,23,45,28,58]
num=2
found=false
for(let i of numArray){
    if(num==i){
        found=true
        break
    }
}
console.log(found?"number is found":"number not found");

