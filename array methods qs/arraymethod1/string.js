const nameArray=["Mini","Mili","Rini","Tini","Rani","Sani"]
//1) is "rini" is present in the array or not 
//2) Display the index of "Rini"
//3) remove rini from above array
//4) reverse array
//5) concat two array
//6) convert array elements into string


console.log("--------------------------------answers------------------------------------");

//1) is "rini" is present in the array or not 

console.log(nameArray.some(name=>name=="Rini"));

// or

console.log(nameArray.includes("Rini"));

//2) Display the index of "Rini"
console.log("-----------------index of rini-----------------");

console.log(nameArray.indexOf("Rini"));

//3) remove rini from above array

console.log("--------------remove rini----------------");
nameArray.splice(2,1)
console.log(nameArray);

//4) reverse array
console.log("--------------reverse array----------------");

console.log(nameArray.reverse())


//5) concat two array
console.log("--------------concat two array----------------");

const newArry=["anu","aami"]
console.log(nameArray.concat(newArry));


//6) convert array elements into string

console.log("--------------array elements into string----------------");

console.log(nameArray.join(","));



















