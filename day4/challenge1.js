const prompt = require("prompt-sync")();

let chaine = prompt("donner un chaine de charachter :");
let i = 0;
while (chaine[i] != undefined) {
  i++;
}
console.log("length is :", i);
