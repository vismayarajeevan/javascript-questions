// [no,district,+ve cases, death rate, current rate, 1st dose vaccine, 2nd dose vaccine]

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

console.log("*********employee***********");

employee.forEach(employee=>console.log(employee[1]))

// 2. print Total number of employees
console.log("********no.of employees***********");

console.log(employee.length);

// 3. print developer employee details

console.log("*****developer*****");
console.log(employee.filter(emp=>emp[2]=="developer"))



// 4. print employee whose salary > 30000

console.log("***********************************");
console.log(employee.filter(salary=>salary[4]>30000))

// 5. print details of employee Laisha

console.log("*************************************");
console.log(employee.find(name=>name[1]=="Laisha"));


// 6. Sort employee based on their salary in decending order
console.log("****************************************");
console.log(employee.sort((a,b)=>b[4]-a[4]))

// 7. sort employee based on their experience in ascending order

console.log("*********************************");
console.log(employee.sort((a,b)=>a[5]-b[5]))


//find employee with least salary

console.log("*********least************");

console.log(employee.reduce((a,b)=>a[4]<b[4]?a:b))
// find employee with highest salary

console.log("***********highest************");
console.log(employee.reduce((a,b)=>a[4]>b[4]?a:b));


// find all employee toatal salry

const arr=employee.map((salary)=>(salary[4]))
console.log(arr);
console.log(arr.reduce((a,b)=>a+b))









