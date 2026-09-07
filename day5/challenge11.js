function formaterChaine(tab){
    return tab.slice(1,tab.length-1).join("-")
}

console.log(formaterChaine(["Début", "JS", "PHP", "Fin"]))