var car={
    name:"boleno",
    model:"hatch-back",
    manufacturer:"Maruti Suzuki",
    price:"13 lakh"
}

//1) display car name and its manufacturer

console.log(`car name is :${car.name} and manufacturer is ${car.manufacturer}`);


//2) check "model key is present?if yes display its value"

console.log(`is model key is present? ${car.hasOwnProperty("model") && car.model}`);


//3) add "varient " as automatic and  manual

car.varient=["automatic","manual"]
console.log(car);

//4) insert varient as hybrid

car.varient.push("hybrid")
console.log(car);



//5) add color as red, white, blue, ash, black

car["colors"]=["red","white","blue","ash","black"]
console.log(car);

