const prompt = require("prompt-sync")();

function compterVoyelles(chaine) {
  let voyelles = ["a", "e", "i", "o", "u", "y"];
  let compt = 0;
  for (let i = 0; i < chaine.length; i++) {
    for (let k = 0; k < voyelles.length; k++) {
      if (chaine[i] == voyelles[k]) {
        compt++;
      }
    }
  }
  return compt;
}

let chaine = prompt("donner un chaine de charachter en miniscule :");

console.log("length is :", compterVoyelles(chaine));
