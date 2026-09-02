const prompt = require("prompt-sync")()
let N = Number(prompt("donner un nombre :"))

let res = 1
for(let i=1; i<=N; i++){
    res *=i
}

console.log(N + "! =", res)