let products = [
    {
        id: 1,
        name: "Laptop",
        category: "Informatique",
        price: 7500
    },
    {
        id: 2,
        name: "Phone",
        category: "Smartphone",
        price: 3500
    },
    {
        id: 3,
        name: "Keyboard",
        category: "Informatique",
        price: 500
    },
    {
        id: 4,
        name: "Monitor",
        category: "Informatique",
        price: 2200
    }
];

function rechercherParId(id){
    for(let prod of products){
        if(prod.id == id){
            return prod;
        }
    }
}

function rechercherParNom(name){
    for(let prod of products){
        if(prod.name == name){
            return prod;
        }
    }
}

function rechercherParCategorie(category){
    for(let prod of products){
        if(prod.category == category){
            return prod;
        }
    }
}


console.log(rechercherParCategorie("Informatique"))
console.log(rechercherParId(id))
console.log(rechercherParNom("phone"))