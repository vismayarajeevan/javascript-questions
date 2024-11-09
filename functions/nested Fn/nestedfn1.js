function outer(a,b){
    function square(x){
        return x*x;
    }
    return square(a)+square(b)
}

console.log(outer(2,3));
