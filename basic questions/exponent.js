// write a program to dispaly numbers whose exponent is in the range of 8 and 6


function exponent(n){
    for(var i=1;i<=36;i++){
        if(i**n>=8 && i**n<=36){
          var result=  console.log(i);
            
        }
    }
    return result;
}
console.log(exponent(2));
