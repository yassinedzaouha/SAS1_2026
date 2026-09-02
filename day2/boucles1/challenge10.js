const prompt = require("prompt-sync")()

let n = 1;
let i = 0;
let res = 0
while(n != 0){
    n = Number(prompt("donner un nombre :"))
    res += n;
    i++;
}
console.log("nombre de valeur :" , i-1);
console.log("somme :" , res);