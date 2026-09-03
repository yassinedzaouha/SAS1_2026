const prompt = require("prompt-sync")();

let password = prompt("enter a password with 8 charachters and a @ :");

function verifierMotDePasse(passw){
    if((passw.length >= 8) && passw.includes("@")){
        return true
    }
    return false
}

console.log(verifierMotDePasse(password))