// create employee object

const employee={
    empId:1000,
    empName:"Neel",
    empDes:"developer",
    empLoc:"kochi",
    empSal:25000,
    empExp:3
}

//1) what is the type of object

console.log(`Type of object is: ${typeof employee}`);

//2) what is the employee name in this object

console.log("-------------------using dot notation---------------");
console.log(`Employee Name: ${employee.empName}`);

//3) what is the employee designation

console.log("-------------------using bracket notation---------------");
console.log(`Employy Designation: ${employee["empDes"]}`);

//4)check employee id is present in this object or not

console.log("-------------------check using in operator---------------");
console.log(`Is empid id present? ${"empId" in employee}`);


console.log("-------------------check using hasownproperty---------------");
console.log(`Is empid is present? ${employee.hasOwnProperty("empId")}`);

//5) insert gender , vaccination status and car
console.log("-------------------add details---------------");

employee.gender="Male";
employee["empVacc"]=true;
Object.assign(employee,{car:"boleno"})
console.log(employee);

//6)upadate vaccination ststus to false and increment employee salary to 5000

console.log("-------------------update details---------------");

employee.empVacc=false;
employee["empSal"]+=5000
console.log(employee);

//7) return all keys in an object

console.log("-------------------return all keys---------------");

console.log(Object.keys(employee));



//8) return all values in an object

console.log("-------------------return all values---------------");
console.log(Object.values(employee));

//9) display object as an array

console.log("-------------------display object as an array---------------");

console.log(Object.entries(employee));

//10)remove vaccination status from object

console.log("-------------------remove vaccination status---------------");

delete employee.empVacc;
console.log(employee);

//11)display each key-value pair one by one

console.log("-------------------each keyvalue pair one by one---------------");
for(let key in employee){
    console.log(`${key}:${employee[key]}`);
    
}

//12) access each values without using dot and bracket notation

console.log("-------------------destructuring---------------");

const {empName,empSal,empDes} =employee
console.log(`Employee Name: ${empName}
Employee Designation: ${empDes}
Employee salary :${empSal}`);
















