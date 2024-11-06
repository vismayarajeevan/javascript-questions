const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");  // check index of liverpool.ie,1
if (index !== -1) {                      // check 1!=-1.true, so go inside loop  
  cities.splice(index, 1);
}
console.log(cities); 
