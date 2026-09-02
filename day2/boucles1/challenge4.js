const prompt = require("prompt-sync")()
let N = Number(prompt("donner un nombre :"))

for(let i=1 ; i<=10 ; i++){
    console.log(N , "x", i, "=", i*N)
}
