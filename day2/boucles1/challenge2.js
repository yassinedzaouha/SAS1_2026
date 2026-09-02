const prompt = require("prompt-sync")()
let N = Number(prompt("donner un nombre :"))

for(let i=2 ; i <= N ; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}