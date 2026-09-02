const prompt = require("prompt-sync")()
let N = prompt("donner un nombre :")
let X = prompt("donner un nombre :")

for(let i=1; i<=N; i++){
    mult = i * X
    console.log(mult)
    if(mult == N){
        break;
    } 
}