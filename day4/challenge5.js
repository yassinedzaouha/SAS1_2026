const prompt = require("prompt-sync")();

function estPalindrome(chaine) {
  let newchaine = "";
  for (let i = chaine.length -1; i >= 0; i--) {
    newchaine += chaine[i];
  }
  if (newchaine == chaine) {
    return true;
  }
  return false;
}

let chaine = prompt("donner un chaine polindrom :");
estPalindrome(chaine)
  ? console.log("set chaine et polindrom")
  : console.log("set chaine n pas polindrom");
