const prompt = require("prompt-sync")()
let N = Number(prompt("donner un nombre :"))

let somme = 0;
for(let i=1; i <= N; i++){
    somme += i;
}

console.log("la somme est :",somme)