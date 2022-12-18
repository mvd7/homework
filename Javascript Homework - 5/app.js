console.log("hello script loool");

let balance = 6900;

function atmFunction(){
    let cash = prompt("How much do you want to withdraw?")
    if (balance >= cash){
        balance-=cash;
        console.log(`You have withdrawed ${cash}$`);
        console.log(`You have ${balance}$ left on your account.`);
    }
    else{
        console.log("You don't have enough cash.")
    }
}

atmFunction();
