//display each number count

numArray=[10,20,30,40,20,30,50,30,20,10,50,30,20,10,60,70,80,20]

output={}
numArray.forEach(num=>output.hasOwnProperty(num)?output[num]+=1:output[num]=1)
console.log(output);
