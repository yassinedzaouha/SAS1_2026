function nettoyerEspaces(text){
    return text.trim()
}

function mettreEnMajuscule(text){
    return text.toUpperCase()
}

function ajouterPrefixe(text, prefixe = "LOG:"){
    return prefixe + text
}

function traiterMessage(text, ...transformations){
    for(let i=0; i<transformations.length ; i++){
        text = transformations[i](text)
    }
    return text
}   

console.log(traiterMessage(" yassine ",nettoyerEspaces,mettreEnMajuscule,ajouterPrefixe))