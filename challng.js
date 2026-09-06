// function repeterChaine(chaine, fois){
//     let sum = ''
//     for ( let i = 1;i<=fois;i++){
//         sum+=chaine
//     }return sum
// }
// console.log(repeterChaine('uyru',3))


// function remplacerCaractere(chaine, ancien, nouveau){
//     let sum=''
//     for (let i=0 ; i<chaine.length;i++){
//         chaine[i] != ancien?sum += chaine[i]:sum += nouveau
//     }
//     return sum
// }

// const prompt = require("prompt-sync")()
// let chaine = prompt("donner un chaine de charachter : ")
// let ancien = prompt("donner le charachter ancien :")
// let nouveau = prompt("donner le nouveau charachter :")
// console.log(remplacerCaractere(chaine,ancien,nouveau))

// function sumBaseExpo(base,expo){
//     let sum=1
    
//     for (let i = 1;i<=expo;i++){
//         sum*=base

//     }
//     return sum
// }
// console.log(sumBaseExpo(3,3))
function hweel(string){
    let klma=''
    for(let i =string.length-1;i>=0;i--){

        klma += string[i]
        
    } return klma
}
console.log(hweel('enissay'))
