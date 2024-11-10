employee =[
    [1000, 'Neel', 'developer', 'kochi', 25000,3],
    [1001, 'Max', 'tester', 'TVM', 15000,2],
    [1002, 'Maxwell', 'QA', 'kochi', 35000,4],
    [1003, 'Vyom', 'QA', 'kochi', 45000,5],
    [1004, 'Laisha', 'tester', 'TVM', 55000,7],
    [1005, 'Aahan', 'developer', 'TVM', 15000,1],
    [1006, 'Aahil', 'QA', 'kochi', 20000,2],
    [1007, 'Shayan', 'developer', 'kochi', 30000,3],
    [1008, 'Nihaan', 'developer', 'TVM', 25000,3],
]
// 1. Print all Employee Name
// 2. print Total number of employees
// 3. print developer employee details
// 4. print employee whose salary > 30000
// 5. print details of employee Laisha
// 6. Sort employee based on their salary in descending order
// 7. sort employee based on their experience in ascending order
// 8. find employee with least salary
// 9. find employee with highest salary
// 10.find all employee toatal salry




console.log("---------------------------------------------------Answeres--------------------------------------------------------");

// 1. Print all Employee Name
console.log("-----------------all employee names-----------------");

employee.forEach(emp=>console.log(emp[1]));

// 2. print Total number of employees

console.log("-----------------total no.of employee-----------------");

console.log(employee.length);

// 3. print developer employee details

console.log("-----------------all developer employee details-----------------");

console.log(employee.filter(emp=>emp[2]=="developer"));

console.log("-----------------all developer employee name only-----------------");

employee.filter(emp=>emp[2]=="developer").forEach(emp=>console.log(emp[1]))

// 4. print employee whose salary > 30000

console.log("-----------------all  employee salary>30000-----------------");

console.log(employee.filter(emp=>emp[4]>30000));

console.log("----------------- employee salary>30000 name only-----------------");

employee.filter(emp=>emp[4]>30000).forEach(emp=>console.log(emp[1]))

// 5. print details of employee Laisha

console.log("-----------------employee laisha details-----------------");
console.log(employee.find(emp=>emp[1]=="Laisha"))

// 6. Sort employee based on their salary in decending order

console.log("-----------------sort employee based on salary in descending order-----------------");

employee.sort((a,b)=>b[4]-a[4]).forEach(emp=>console.log(emp[1]))

// 7. sort employee based on their experience in ascending order

console.log("-----------------sort employee based on experience in ascending order-----------------");

employee.sort((a,b)=>a[5]-b[5]).forEach(emp=>console.log(emp[1]))

// 8. find employee with least salary

console.log("-----------------employee with least salry-----------------");

const laest=employee.reduce((a,b)=>a[4]<b[4]?a:b)
console.log(`employee ${laest[1]} with least salry: ${laest[4]}`); // it will give first person that show least salry in ascending order. if 2 prsn have same salary, if you want to print last person who has lowest salry use reduceright

console.log("----------reduceright method------");

const lastleast=employee.reduceRight((a,b)=>a[4]<b[4]?a:b)
console.log(`employee ${lastleast[1]} has last person with least salary: ${lastleast[4]}`);





// 9.find employee with highest salary
console.log("-----------------employee with highest salry-----------------");

const highest=employee.reduce((a,b)=>a[4]>b[4]?a:b)
console.log(`employee ${highest[1]} with highest salry: ${highest[4]}`);

// find all employee toatal salry

console.log("-----------------employee with least salry-----------------");

const sum=employee.map(emp=>emp[4])
console.log(sum);
total=sum.reduce((a,b)=>a+b)
console.log(`total sum of salary is: ${total}`);









































