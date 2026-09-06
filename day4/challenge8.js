const prompt = require("prompt-sync")()

function extraireChaine(chaine, debut, fin){
    let newchaine = ""
    for(let i=debut; i<fin; i++){
        newchaine += chaine[i]
    }
    return newchaine
} 

let chaine = prompt("donner un chaine de charachter :")
let debut = prompt("donner un indice de debut :")
let fin = prompt("donner un indice fin :")

console.log(extraireChaine(chaine,debut,fin))
