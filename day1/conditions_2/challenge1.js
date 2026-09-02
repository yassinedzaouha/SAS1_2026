const prompt = require("prompt-sync")();
let commandeM = Number(prompt("donner le mantant de commande :"));

let livraison;
if (commandeM < 100) {
  liraison = 30;
} else if (commandeM >= 100 && commandeM < 300) {
  livraison = 20;
} else if (commandeM >= 300 && commandeM < 500) {
  livraison = 10;
} else {
  console.log("livraison gratuit");
  console.log("total a psyer : ", commandeM, "DH");
}

if (livraison) {
  console.log("livraison :", livraison);
  console.log("total a psyer : ", commandeM + livraison, "DH");
}
