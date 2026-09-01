console.log("1 -> Bus")
console.log("2 -> Train")
console.log("3 -> Tramway")
console.log("4 -> Taxi")
console.log("5 -> Velo")

let prompt = require("prompt-sync")();
let choix = Number(prompt("choisire un trajet : "));

let tr;
let prix;

switch (choix) {
    case 1 :
        tr = "bus"
        prix = "5dh"
        break;
    case 2 :
        tr = "train";
        prix = "20dh";
        break;
    case 3 :
        tr = "tramway";
        prix = "6dh";
        break;
    case 4 :
        tr = "taxi"
        prix = "15dh"
        break;
    case 5 : 
        tr = "velo"
        prix = "10dh"
        break;
    default :
        console.log("Transport invalide.");
}

if(tr){
    console.log("transport :",tr);
    console.log("prix :",prix)
}
