function numbreParfiat(number){
    let somme = 0;
    for(let i=1; i<=(number/2); i++){
        if(number % i == 0){
            somme += i
        }
    }
    return (somme == number ? true : false)
}

const prompt = require("prompt-sync")();

let num = prompt("donner un number :");

console.log("Nombres parfaits :")
for(let i=1; i<=num; i++){
    if(numbreParfiat(i)){
        console.log(i)
    }
}