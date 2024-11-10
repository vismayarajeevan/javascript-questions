// [no,district,+ve cases, death rate, curend rate, 1st dose vaccine, 2nd dose vaccine]

covid_data = [
    [1,'Ernakulam', 34000,2000,23000,20000,2000],
    [2,'Idukki', 14000,3000,25000,30000,1000],
    [3,'Thrissur', 24000,4000,33000,24000,2500],
    [4,'Pathanamthitta', 20000,2000,45000,22000,1500],
    [5,'Kozhikode', 44000,5000,12000,21000,500],
    [6,'Palakkad', 27000,1000,20000,23000,3400],
    [7,'Kottayam', 27000,1500,27000,14000,1000],
    [8,'Kollam', 14000,2500,25000,18000,2700]

]

//1. print thrissur details
console.log("-------------------thrissur details----------------");

console.log(covid_data.find(item=>item[1]=="Thrissur"));

//2. print cured cases in idukki

console.log("-------------------cured cases in idukki----------------");
const cured1=covid_data.find(item=>item[1]=="Idukki")
console.log(`cured cases in idukki: ${cured1[4]}`);

//3. print total no.of positive cases

console.log("-------------------total no.of positive cases----------------");

const positive=covid_data.map(item=>item[2])
console.log(positive.reduce((a,b)=>a+b));
 


//4. print total no.of cured cases

console.log("-------------------total no.of cured cases----------------");

const cured=covid_data.map(item=>item[4])
console.log(cured.reduce((a,b)=>a+b));


//1)district having highest +ve case

console.log("-------------------district having highest positive case----------------");

console.log(covid_data.reduce((a,b)=>a[2]>b[2]?a:b))

//2) district having highest 1st dose vaccine

console.log("-------------------highest 1st dose vaccine----------------");

const highest= covid_data.reduce((a,b)=>a[5]>b[5]?a:b)
console.log(`highest first dose vaccinated district: ${highest[1]}`);

//3) district having lowest death rate

console.log("-------------------lowest death rate----------------");

const lowest=covid_data.reduce((a,b)=>a[4]<b[4]?a:b)
console.log(`lowest death rate districe: ${lowest[1]}`);

// 4) sort data with +ve case in descending order

console.log("-------------------sort based on +ve cases in descending----------------");

console.log(covid_data.sort((a,b)=>b[2]-a[2]));



//5) Is district with +ve cases>15000 present or not 

console.log("-------------------is district with +va cases>15000 present or not----------------");

console.log(covid_data.filter(item=>item>15000)?"yes":"no");

