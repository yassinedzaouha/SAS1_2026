const prompt = require("prompt-sync")();

let num = prompt("donner un number :");

function countNum(num){
    let bool = false
    let compt = 0
    while(!bool){
        if(num >= 1 ){
            num /= 10
            compt++
        }
        else {
            bool = true;
            break;
        }
    }
    return compt;
}

console.log("nombre de chifre :",countNum(num))