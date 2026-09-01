let prompt = require("prompt-sync")();
let commandeMantant = Number(prompt("donner le montant de la commande :"))

let livraison

if(commandeMantant >= 500 ){
    console.log("livraison : gratuite")
    livraison = 0
}
else {
    console.log("livraison : gratuite")
    livraison = 40
}

console.log("total a payer :", commandeMantant + livraison)