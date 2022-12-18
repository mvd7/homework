console.log("hello js");


function sumCalculator(){
    let sum = 0;
    const numArray = [10,50,22,44,52];
    for (let i=0; i<numArray.length; i++){
        if(!validateNumber(numArray[i]))
        return `Invalid array`;
         sum+=numArray[i];
    }
    return sum;
}

console.log(sumCalculator());


function validateNumber(element){
    if (typeof element === "number")
    return true;
    else{
        return false;
    }
}

