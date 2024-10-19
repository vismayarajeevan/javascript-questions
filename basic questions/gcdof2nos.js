//Q) Write a program to find GCD/ HCF of 2 numbers



function gcdNumber(num1,num2){
    var gcd=1;
    if(num1<num2){
        for(var i=1;i<=num1;i++){
            if(num1%i==0 && num2%i==0){
                gcd=i;
            }
            
        }
        return gcd;
    }
    else{
        for(var i=1;i<=num2;i++){
            if(num1%i==0 && num2%i==0){
                gcd=i;
            }
        }
        return gcd;
    }

}

console.log(gcdNumber(15,10));
