
function compterCaracteres(chaine){
    let i = 0;
    while (chaine[i] != undefined) {
        i++;
    }
    return i
}

const prompt = require("prompt-sync")();
let chaine = prompt("donner un chaine de charachter :");

console.log("length is :", compterCaracteres(chaine));
