function calculerTotalPanier(panier){
    return panier.reduce(function (acc, obj) { return acc + (obj.prix * obj.quantite) }, 0);
}

console.log(calculerTotalPanier([{prix: 10, quantite: 2}, {prix: 5, quantite: 1}]))