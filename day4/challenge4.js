function compterLettre(chaine, lettre){
    let compt = 0
    for(let i=0; i<chaine.length ;i++){
        if(lettre == chaine[i]){
            compt++
        }
    }
    return compt
}

console.log(compterLettre("javascript","a"))