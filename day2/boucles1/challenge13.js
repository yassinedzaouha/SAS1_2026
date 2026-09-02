const prompt = require("prompt-sync")()
let N = Number(prompt("donner un nombre :"))

let i;
for( i=2; i < N; i++){
    if(N % i != 0){
        continue;
    }
    else{
        break;
    }
}

if(i == N){
    console.log(N, "est un nombre premier.")
}
else {
    console.log(N, "n'est pas un nombre premier.")
}
