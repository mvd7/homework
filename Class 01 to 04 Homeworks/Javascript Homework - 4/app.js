console.log("script working");

function humanToDog(year){
    let dogYear = year * 7;
    return dogYear;
}


console.log(humanToDog(6));

function dogToHuman(dogYear){
    let year = dogYear / 7;
    return year;
}

console.log(dogToHuman(42));
