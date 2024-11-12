pattern="ABBCCBAD"
//find the first recursive character from the given pattern


output={}
charArray=pattern.split("")

for(let word of charArray){
    if(word in output){
        console.log(`${word} is the first recursive character`);
        break
        
    }else{
        output[word]=1
    }
}