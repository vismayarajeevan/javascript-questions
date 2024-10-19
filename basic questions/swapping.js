// swap 2 numbers using third variable


function swappimg(n1,n2){
    let temp;
    temp=n2;
    n2=n1;
    n1=temp;
    return [n1,n2];
    
}
const result=swappimg(10,20);
console.log(result);
