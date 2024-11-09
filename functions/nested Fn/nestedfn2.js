function ouside(x){
    function inside(y){
        return x+y;
    }
    return inside
}
const insidefn= ouside(3);  // assign to variable to give another value for addition
console.log(insidefn(7));

console.log(ouside(10)(50));

