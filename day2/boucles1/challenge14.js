const prompt = require("prompt-sync")()
let N = Number(prompt("donner un nombre :"))

let i;
let sommePair = 0;
let sommeImpair = 0;
for(i=1; i<=N; i++){
    i % 2 == 0 ? sommePair+=i : sommeImpair+=i ;
}

console.log("somme des nombre paire :",sommePair)
console.log("somme des nombre impaire :",sommeImpair)


