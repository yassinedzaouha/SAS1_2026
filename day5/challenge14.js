function obtenirProduitsEnPromo(produits){
    return produits.filter(obj => obj.enPromo).map(obj => obj.nom) 
}

console.log(obtenirProduitsEnPromo([{nom: "PC", enPromo: false}, {nom: "Souris", enPromo: true},{nom: "Phone", enPromo: true}]))