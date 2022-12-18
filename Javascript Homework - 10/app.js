console.log("script works");

const numArray = [3, 5, 6, 8, 11];
let min = numArray[0];
let max = numArray[0];
let sum = 0;

function minMaxSum(){
    for(let i = 0; i < numArray.length; i++){
        if(min > numArray[i]){
            min=numArray[i];
        }
        if(max < numArray[i]){
            max=numArray[i];
        }
        sum = min + max; 
    }
    return `Max:${max}, Min:${min} Sum:${sum}`
}

console.log(minMaxSum());