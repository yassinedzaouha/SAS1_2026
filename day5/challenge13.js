function trouverPremierMajeur(utilisateurs){
    return utilisateurs.find(obj => obj.age >= 18)
}

console.log(trouverPremierMajeur([{nom: "Lina", age: 15}, {nom: "Amine", age: 20}]))