const prompt = require("prompt-sync")()
let N = Number(prompt("donner un nombre :"))

let compt = 0;
console.log("les diviseurs :")
for(let i=1; i<=N ;i++){
    if(N % i == 0){
        console.log(i)
        compt++;
    }
}
console.log("nombre de diviseurs :",compt)

