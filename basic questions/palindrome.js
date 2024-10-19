//check a number is palindrome or not


function palindrome(n){
    var original=n;
    var rev="";
    while(n>0){
        let lastdigit=n%10;
        rev+=lastdigit;
        n=Math.floor(n/10);
    }

    let reverseNum=parseInt(rev,10);

    if(reverseNum==original){
        return "palindrome number";
        
    }else{
        return "not a palindrome number";
        
    }
}
 const result=palindrome(121);
 console.log(result);



