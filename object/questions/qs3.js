sentence="hai hello hai hello world"
// display the word count of each word as an object- split
//output- {hai:2,hello:2,world:1}


//logic

output={}
sentence.split(" ").forEach(word=>output.hasOwnProperty(word)?output[word]+=1:output[word]=1)
console.log(output);

