console.log("working script");

function sentence(){
    const wordArray = ["Hello", "there", "students", "of", "SEDC", "!"];
    let fullSentence = "";
    for(let i=0; i<wordArray.length; i++){
        fullSentence += wordArray[i]+" ";  
    }
    console.log(fullSentence);
}

sentence();