//1)write a program to check the given email is valid gmail or not

const prompt= require ('prompt-sync') ({signit:true})
const input=prompt("Enter a gmail:")

console.log(input.endsWith("@gmail.com")?"valid email":"not a valid mail");
