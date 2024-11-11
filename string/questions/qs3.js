//3)write a program to print all vowels from the given word

const prompt=require('prompt-sync')({signit:true})
const input=prompt("enter a word:")

const vowel=["a","e","i","o","u"]
console.log(`All vowels: ${input.toLowerCase().split("").filter(char=>vowel.includes(char))}`);
