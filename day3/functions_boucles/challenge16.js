const prompt = require("prompt-sync")();



function devenirUnNum(secret,num){
    if(num == secret){
        console.log("Bravo !");
    }
    else if(num <= secret){
        console.log("Trop petit");
    }
    else {
        console.log("Trop grand");
    }
}
let secret = 15;
let num = 0
while(secret != num){
    num = prompt("try to catch the secret number :");
    console.log("Tentative :", num)
    devenirUnNum(secret, num)
}