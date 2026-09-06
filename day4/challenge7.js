function remplacerCaractere(chaine, ancien, nouveau){
    let sum=''
    for (let i=0 ; i<chaine.length;i++){
        chaine[i] != ancien?sum += chaine[i]:sum += nouveau
    }
    return sum
}

const prompt = require("prompt-sync")()
let chaine = prompt("donner un chaine de charachter : ")
let ancien = prompt("donner le charachter ancien :")
let nouveau = prompt("donner le nouveau charachter :")
console.log(remplacerCaractere(chaine,ancien,nouveau))