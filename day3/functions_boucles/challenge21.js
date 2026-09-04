function premier(N){
    let i;
    let bool = true
    for( i=2; i < N/2; i++){
        if(N % i == 0){
            bool = false
            break;
        }
    }
     return bool
}

const prompt = require("prompt-sync")();

let debut = prompt("donner un number de debut :");
let fin = prompt("donner un number de fin :");

let compt = 0
for(let i=debut; i<=fin; i++){
    if(premier(i)){
        console.log(i);
        compt++;
    }
}


