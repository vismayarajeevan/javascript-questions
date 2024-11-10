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


for(let i of employee){
    console.log(i[1]);
    
}

// 3. print developer employee details
console.log("---------------------developer employee name-------------------");


for(let i of employee){
    if(i[2]=="developer"){
        console.log(i[1]);
        
    }
}

// 4. print employee whose salary > 30000

console.log("--------------------- employee salary>30000 name-------------------");
for(let i of employee){
    if(i[4]>30000){
        console.log(` ${i[1]} salary is ${i[4]}`);
        
    }
}