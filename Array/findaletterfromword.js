// write a function to find a letter is present or not in a string

function letterFind(word,match){
    for(var i=0;i<word.length;i++){
        if(word[i]==match){
            console.log("Found the, match, 'at', i");
            
        }else{
            console.log('---No match found at', i);
        }
    }
}
letterFind("test","t")