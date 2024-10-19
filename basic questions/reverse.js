// write a program to find reverse of a number

function reverse(n){
    var reverseNum=""
    while(n>0){
        let lastdigit=n%10;
        reverseNum+=lastdigit;
        n=Math.floor(n/10);
    }
    return reverseNum  ;
}
console.log(reverse(234));
