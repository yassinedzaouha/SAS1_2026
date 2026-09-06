const prompt = require("prompt-sync")();

function repeterChaine(chaine, fois) {
  let newchaine = "";
  for (let i = 0; i < fois; i++) {
    newchaine += chaine;
  }
  return newchaine;
}

let chaine = prompt("donner un chaine :");
let fois = prompt("donner un nombre de fois de repitation :");

console.log(repeterChaine(chaine,fois));
