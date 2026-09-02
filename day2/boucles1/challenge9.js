const prompt = require("prompt-sync")()
let base = Number(prompt("donner un nombre base :"))
let exposant = Number(prompt("donner un nombre exposant :"))

let i = 1
let res = 1
while(i<=exposant){
    res *= base
    i++
}
console.log("result :",res)