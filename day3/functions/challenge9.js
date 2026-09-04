const prompt = require("prompt-sync")();

let valuerIni = prompt("donner la valeur initiale :");

function creerCompteur(val){
    let compt = val;
    return (() => {
        compt++
        return compt
    })
}

let monCompteur = creerCompteur(valuerIni);

monCompteur() // add to valeurIni +1
console.log(monCompteur()) // add +1 again

