const prompt = require("prompt-sync")();

let num = prompt("donner un number :");

for(let i=2 ; i<=num ; i++){
    for(let j = i-2 ; j<=i ;j++){
        console.log(j + (j-1))
    }
}
