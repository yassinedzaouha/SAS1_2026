const prompt = require("prompt-sync")()
let N = Number(prompt("donner un nombre :"))

let i;
let bool = true
for( i=2; i < N; i++){
    if(N % i == 0){
        console.log(N, "n'est pas un nombre premier.")
        bool = false
        break;
    }
}

if(bool){
    console.log(N, "est un nombre premier.");
}
