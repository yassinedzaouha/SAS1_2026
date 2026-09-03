const prompt = require("prompt-sync")();
let num = Number(prompt("donner un nombre :"))

let somme = 0;
function numbreParfiat(number){
    for(let i=1; i<=(number/2); i++){
        if(number % i == 0){
            somme += i
        }
    }
    somme == num? console.log(number, "is a perfect number"): console.log(number, "is not a perfect number")
}
numbreParfiat(num)