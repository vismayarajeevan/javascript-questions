// [no,district,+ve cases, death rate, cured rate, 1st dose vaccine, 2nd dose vaccine]
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

//print total no.of positive cases
const positive=covid_data.map(data=>data[2])
console.log(positive.reduce((a,b)=>a+b));



// print total no.of cured cases

const cured=covid_data.map(data=>data[4])
console.log(cured.reduce((a,b)=>a+b));

//1)district having highest +ve case
const dia=covid_data.reduce((a,b)=>a[2]>b[2]?a:b);
console.log(`district having highest +ve case :${dia[1]}`);

//2) district having highest 1st dose vaccine
const dis=covid_data.reduce((a,b)=>a[5]>b[5]?a:b);
console.log(`district having highest +ve case :${dis[1]}`);


//3) district having lowest death rate
const dis1=covid_data.reduce((a,b)=>a[3]<b[3]?a:b)
console.log(`district having lowest death rate:${dis1[1]}`);

// 4) sort data with +ve case in descending order
console.log(covid_data.sort((a,b)=>b[2]-a[2]));

// print thrissur details
console.log(covid_data.find(emp=>emp[1]=="Thrissur"))




//5) Is district with +ve cases>15000 present or not 
console.log(covid_data.some((emp)=>emp[2]>15000)?"yes":"no");

//sort dara with 1st dose vaccine in ascending
// 4) sort data with +ve case in descending order
// print cured cases in idukki
const cured1=covid_data.find(element=>element[1]=="Idukki")
console.log(cured1[4]);
//5) Is all district with +ve cases>15000 present or not
console.log(covid_data.every((emp)=>emp[2]>15000)?"yes":"no");

